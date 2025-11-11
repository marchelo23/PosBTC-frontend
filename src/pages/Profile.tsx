import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { CreditCard, LogOut, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords don't match",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Password updated successfully",
      description: "Your password has been changed",
      className: "bg-success text-success-foreground border-success",
    });
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Bitcoin NFC Pay</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="text-foreground hover:text-primary">
                Dashboard
              </Link>
              <span className="text-foreground">Jane Doe</span>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Profile & Security</h1>

          {/* Change Password */}
          <Card className="bg-card border-border p-6 mb-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Change Your Password</h2>
            <form onSubmit={handlePasswordUpdate} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input
                  id="current-password"
                  type="password"
                  placeholder="Enter your current password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="bg-input border-border"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="Enter your new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="bg-input border-border"
                  required
                />
                <p className="text-xs text-muted-foreground">Must be at least 8 characters long.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-input border-border"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                Update Password
              </Button>
            </form>
          </Card>

          {/* Account Actions */}
          <Card className="bg-card border-border p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Account Actions</h2>
            <div className="flex items-center justify-between">
              <p className="text-foreground">Permanently log out of your account.</p>
              <Button 
                onClick={handleLogout}
                variant="outline" 
                className="border-border hover:border-destructive hover:text-destructive"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Log Out
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;
