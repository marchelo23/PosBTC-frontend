import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Wallet, Plus, User, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<"client" | "merchant">("client");

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">BitPOS</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveTab("client")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "client"
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t('client')}
              </button>
              <button
                onClick={() => setActiveTab("merchant")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "merchant"
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t('merchant')}
              </button>
              <div className="h-6 w-px bg-border" />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className="rounded-full"
              >
                <Languages className="w-5 h-5" />
              </Button>
              <Link to="/profile">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === "client" ? <ClientDashboard /> : <MerchantDashboard />}
      </main>
    </div>
  );
};

const ClientDashboard = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [showWalletDialog, setShowWalletDialog] = useState(false);
  const [showCardDialog, setShowCardDialog] = useState(false);
  const [walletName, setWalletName] = useState("");
  const [cardUID, setCardUID] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");
  const [wallets, setWallets] = useState([
    { id: "1", name: "Daily Spending", balance: "54,290 sats" },
    { id: "2", name: "Savings", balance: "1,290,000 sats" },
  ]);
  const [cards, setCards] = useState([
    { uid: "04-5A-88-C9-F2-3D-E1", linkedTo: "Daily Spending" },
  ]);

  const handleCreateWallet = () => {
    if (!walletName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a wallet name",
        variant: "destructive",
      });
      return;
    }

    const newWallet = {
      id: String(wallets.length + 1),
      name: walletName,
      balance: "0 sats",
    };
    setWallets([...wallets, newWallet]);
    setWalletName("");
    setShowWalletDialog(false);
    toast({
      title: "Success",
      description: `Wallet "${walletName}" created successfully`,
    });
  };

  const handleRegisterCard = () => {
    if (!cardUID.trim() || !selectedWallet) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    const wallet = wallets.find(w => w.id === selectedWallet);
    const newCard = {
      uid: cardUID,
      linkedTo: wallet?.name || "",
    };
    setCards([...cards, newCard]);
    setCardUID("");
    setSelectedWallet("");
    setShowCardDialog(false);
    toast({
      title: "Success",
      description: "NFC card registered successfully",
    });
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">{t('dashboard')}</h1>
        <p className="text-muted-foreground">{t('dashboardSubtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* My Wallets */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">{t('myWallets')}</h2>
            <Button
              onClick={() => setShowWalletDialog(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Plus className="w-4 h-4 mr-2" />
              {t('createNewWallet')}
            </Button>
          </div>
          <div className="space-y-3">
            {wallets.map((wallet) => (
              <Card
                key={wallet.id}
                className="bg-card border-border p-4 hover:border-primary/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{wallet.name}</h3>
                    <p className="text-sm text-muted-foreground">{wallet.balance}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* BTC to USD Conversion */}
          <Card className="bg-card border-border p-4 mt-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">{t('currentBTCPrice')}</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">$89,450</span>
              <span className="text-sm text-success">+2.4%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{t('lastUpdated')}: {t('justNow')}</p>
          </Card>
        </div>

        {/* My NFC Cards */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">{t('myNFCCards')}</h2>
            <Button
              onClick={() => setShowCardDialog(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              {t('registerNewCard')}
            </Button>
          </div>
          <div className="space-y-3">
            {cards.map((card, index) => (
              <Card key={index} className="bg-card border-border p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">UID: {card.uid}</h3>
                    <p className="text-sm text-muted-foreground">{t('linkedTo')}: {card.linkedTo}</p>
                  </div>
                </div>
              </Card>
            ))}

            {cards.length === 1 && (
              <Card className="bg-card border-border p-8 text-center">
                <CreditCard className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                <h3 className="font-semibold text-foreground mb-1">{t('noCardsRegistered')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('noCardsDescription')}
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Create Wallet Dialog */}
      <Dialog open={showWalletDialog} onOpenChange={setShowWalletDialog}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">{t('createWallet')}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {t('createWalletDescription')}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="wallet-name" className="text-foreground">
                {t('walletName')}
              </Label>
              <Input
                id="wallet-name"
                placeholder={t('walletNamePlaceholder')}
                value={walletName}
                onChange={(e) => setWalletName(e.target.value)}
                className="bg-background border-border"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowWalletDialog(false)}
              className="border-border"
            >
              {t('cancel')}
            </Button>
            <Button
              onClick={handleCreateWallet}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {t('create')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Register Card Dialog */}
      <Dialog open={showCardDialog} onOpenChange={setShowCardDialog}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">{t('registerCard')}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {t('registerCardDescription')}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="card-uid" className="text-foreground">
                {t('cardUID')}
              </Label>
              <Input
                id="card-uid"
                placeholder={t('cardUIDPlaceholder')}
                value={cardUID}
                onChange={(e) => setCardUID(e.target.value)}
                className="bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wallet-select" className="text-foreground">
                {t('selectWallet')}
              </Label>
              <Select value={selectedWallet} onValueChange={setSelectedWallet}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder={t('selectWalletPlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  {wallets.map((wallet) => (
                    <SelectItem key={wallet.id} value={wallet.id}>
                      {wallet.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowCardDialog(false)}
              className="border-border"
            >
              {t('cancel')}
            </Button>
            <Button
              onClick={handleRegisterCard}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {t('register')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const MerchantDashboard = () => {
  const { t } = useTranslation();
  const [showApiKey, setShowApiKey] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);

  const transactions = [
    { date: "2024-01-15 14:32", amount: "0.00123 BTC", status: "completed" },
    { date: "2024-01-15 12:15", amount: "0.00089 BTC", status: "completed" },
    { date: "2024-01-14 18:45", amount: "0.00234 BTC", status: "completed" },
    { date: "2024-01-14 16:20", amount: "0.00156 BTC", status: "pending" },
    { date: "2024-01-13 10:30", amount: "0.00078 BTC", status: "completed" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-success";
      case "pending":
        return "text-warning";
      case "failed":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">{t('merchantDashboard')}</h1>
        <p className="text-muted-foreground">{t('merchantSubtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* My Commercial Wallet */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">{t('myCommercialWallet')}</h2>
          <Card className="bg-card border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t('totalBalance')}</p>
                <h3 className="text-3xl font-bold text-foreground">₿ 0.54321</h3>
                <p className="text-sm text-muted-foreground mt-1">≈ $48,600 USD</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full border-border hover:border-primary"
              onClick={() => setShowTransactions(true)}
            >
              {t('viewRecentTransactions')}
            </Button>
          </Card>
        </div>

        {/* POS Devices */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">{t('devicesPOS')}</h2>
            <Button
              onClick={() => setShowApiKey(!showApiKey)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Plus className="w-4 h-4 mr-2" />
              {t('registerNewPOS')}
            </Button>
          </div>

          <div className="space-y-3">
            <Card className="bg-card border-border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">POS Terminal #1</h3>
                  <p className="text-sm text-muted-foreground">{t('lastActive')}: 5 min ago</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-sm text-success">{t('online')}</span>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">POS Terminal #2</h3>
                  <p className="text-sm text-muted-foreground">{t('lastActive')}: 2 hours ago</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{t('offline')}</span>
                </div>
              </div>
            </Card>
          </div>

          {showApiKey && (
            <Card className="bg-warning/10 border-warning/50 p-5 mt-4">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-6 h-6 rounded bg-warning flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-warning-foreground font-bold text-sm">!</span>
                </div>
                <div>
                  <h3 className="font-semibold text-warning mb-1">{t('importantCopyAPI')}</h3>
                  <p className="text-sm text-foreground/80">
                    {t('importantDescription')}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <Label className="text-foreground mb-2 block">{t('yourNewAPIKey')}</Label>
                <div className="flex gap-2">
                  <Input
                    value="BtcPay-aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890"
                    readOnly
                    className="bg-background border-border font-mono text-sm"
                  />
                  <Button size="icon" variant="outline" className="border-border">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  </Button>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <h4 className="font-semibold text-foreground">{t('esp32Setup')}</h4>
                <p className="text-foreground/80">
                  {t('esp32Description')}
                </p>
                <ol className="list-decimal list-inside space-y-1 text-foreground/80 ml-2">
                  <li>{t('esp32Step1')}</li>
                  <li>{t('esp32Step2')}</li>
                  <li>{t('esp32Step3')}</li>
                  <li>{t('esp32Step4')}</li>
                </ol>
              </div>

              <Button
                onClick={() => setShowApiKey(false)}
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {t('done')}
              </Button>
            </Card>
          )}
        </div>
      </div>

      {/* Transactions Dialog */}
      <Dialog open={showTransactions} onOpenChange={setShowTransactions}>
        <DialogContent className="bg-card border-border max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-foreground">{t('recentTransactions')}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {t('recentTransactionsDescription')}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-3">
              {transactions.map((tx, index) => (
                <Card key={index} className="bg-background border-border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{t('date')}: {tx.date}</p>
                      <p className="font-semibold text-foreground mt-1">{tx.amount}</p>
                    </div>
                    <div className={`text-sm font-medium capitalize ${getStatusColor(tx.status)}`}>
                      {t(tx.status)}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => setShowTransactions(false)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {t('close')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
