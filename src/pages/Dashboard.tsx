import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Wallet, Plus, User } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<"client" | "merchant">("client");

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
              <span className="text-xl font-bold text-foreground">Bitcoin NFC Pay</span>
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
                Client
              </button>
              <button
                onClick={() => setActiveTab("merchant")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "merchant"
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Merchant
              </button>
              <div className="h-6 w-px bg-border" />
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
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Manage your wallets and NFC cards with ease.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* My Wallets */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">My Wallets</h2>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Plus className="w-4 h-4 mr-2" />
              Create new wallet
            </Button>
          </div>
          <div className="space-y-3">
            <Card className="bg-card border-border p-4 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Daily Spending</h3>
                  <p className="text-sm text-muted-foreground">54,290 sats</p>
                </div>
              </div>
            </Card>
            <Card className="bg-card border-border p-4 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Savings</h3>
                  <p className="text-sm text-muted-foreground">1,290,000 sats</p>
                </div>
              </div>
            </Card>
          </div>

          {/* BTC to USD Conversion */}
          <Card className="bg-card border-border p-4 mt-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Current BTC Price</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">$89,450</span>
              <span className="text-sm text-success">+2.4%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Last updated: Just now</p>
          </Card>
        </div>

        {/* My NFC Cards */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">My NFC Cards</h2>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <CreditCard className="w-4 h-4 mr-2" />
              Register new card
            </Button>
          </div>
          <div className="space-y-3">
            <Card className="bg-card border-border p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">UID: 04-5A-88-C9-F2-3D-E1</h3>
                  <p className="text-sm text-muted-foreground">Linked to: Daily Spending</p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-card border-border p-8 text-center">
              <CreditCard className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
              <h3 className="font-semibold text-foreground mb-1">No other cards registered</h3>
              <p className="text-sm text-muted-foreground">
                Click "Register new card" to link a new NFC card to one of your wallets.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const MerchantDashboard = () => {
  const [showApiKey, setShowApiKey] = useState(false);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Merchant Dashboard</h1>
        <p className="text-muted-foreground">Manage your commercial wallet and POS devices.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* My Commercial Wallet */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">My Commercial Wallet</h2>
          <Card className="bg-card border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Balance</p>
                <h3 className="text-3xl font-bold text-foreground">₿ 0.54321</h3>
                <p className="text-sm text-muted-foreground mt-1">≈ $48,600 USD</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
            </div>
            <Button variant="outline" className="w-full border-border hover:border-primary">
              View Recent Transactions
            </Button>
          </Card>
        </div>

        {/* POS Devices */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Devices POS</h2>
            <Button 
              onClick={() => setShowApiKey(!showApiKey)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Plus className="w-4 h-4 mr-2" />
              Register new POS
            </Button>
          </div>

          <div className="space-y-3">
            <Card className="bg-card border-border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">POS Terminal #1</h3>
                  <p className="text-sm text-muted-foreground">Last active: 5 min ago</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-sm text-success">Online</span>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">POS Terminal #2</h3>
                  <p className="text-sm text-muted-foreground">Last active: 2 hours ago</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Offline</span>
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
                  <h3 className="font-semibold text-warning mb-1">Important: Copy this API Key now.</h3>
                  <p className="text-sm text-foreground/80">
                    You will not be able to see it again for security reasons.
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                <Label className="text-foreground mb-2 block">Your New API Key</Label>
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
                <h4 className="font-semibold text-foreground">ESP32 Setup Instructions</h4>
                <p className="text-foreground/80">
                  To connect your ESP32 device, update your firmware configuration with the following details:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-foreground/80 ml-2">
                  <li>Flash the latest version of the Bitcoin NFC Pay firmware onto your device.</li>
                  <li>Connect the device to your Wi-Fi network.</li>
                  <li>In the firmware's 'config.h' file, paste the API key provided above into the 'API_KEY' variable.</li>
                  <li>Upload the updated configuration to your ESP32. The device will automatically connect and appear as "Online" in your dashboard.</li>
                </ol>
              </div>

              <Button 
                onClick={() => setShowApiKey(false)}
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Done
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
