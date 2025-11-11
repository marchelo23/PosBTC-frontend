import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Eye, EyeOff, User, Lock } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") === "register" ? "register" : "login";
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"client" | "merchant">("client");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in production this would authenticate
    toast({
      title: "Login successful",
      description: "Welcome back to BitPOS",
    });
    navigate("/dashboard");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration - in production this would create account
    toast({
      title: "Account created",
      description: `Your ${userType} account has been created successfully`,
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
            <CreditCard className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Securely access your Bitcoin wallet.</p>
        </div>

        {/* Auth Card */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-secondary">
              <TabsTrigger 
                value="login"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Login
              </TabsTrigger>
              <TabsTrigger 
                value="register"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Register
              </TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-username">Username</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="login-username"
                      placeholder="Enter your username"
                      className="pl-10 bg-input border-border"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 bg-input border-border"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Login
                </Button>

                <div className="text-center">
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Forget Password?
                  </a>
                </div>
              </form>
            </TabsContent>

            {/* Register Form */}
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-username">Username</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="register-username"
                      placeholder="Choose a username"
                      className="pl-10 bg-input border-border"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="register-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="pl-10 pr-10 bg-input border-border"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Account Type</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setUserType("client")}
                      className={`p-4 rounded-lg border transition-all ${
                        userType === "client"
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-secondary text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      <User className="w-5 h-5 mx-auto mb-2" />
                      <div className="text-sm font-medium">Client</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType("merchant")}
                      className={`p-4 rounded-lg border transition-all ${
                        userType === "merchant"
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-secondary text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      <CreditCard className="w-5 h-5 mx-auto mb-2" />
                      <div className="text-sm font-medium">Merchant</div>
                    </button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Create Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
