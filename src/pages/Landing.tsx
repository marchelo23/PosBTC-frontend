import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wallet, CreditCard, CheckCircle } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">BitPOS</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Log In
              </Button>
            </Link>
            <Link to="/auth?tab=register">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          Pay with Bitcoin in seconds.
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Tap your NFC card for instant, secure crypto payments at any participating merchant.
        </p>
        <div className="flex items-center justify-center gap-4 mb-16">
          <Link to="/auth?tab=register">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg px-8"
            >
              Create Your Free Account
            </Button>
          </Link>
          <span className="text-muted-foreground">
            Already have an account?{" "}
            <Link to="/auth" className="text-primary hover:underline">
              Log In
            </Link>
          </span>
        </div>

        {/* Process Flow */}
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CreditCard className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">NFC Card</h3>
              <p className="text-muted-foreground text-sm">
                Register your NFC card and link it to your Bitcoin wallet
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Wallet className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">POS Terminal</h3>
              <p className="text-muted-foreground text-sm">
                Tap your card on any BitPOS terminal at participating merchants
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Payment Sent</h3>
              <p className="text-muted-foreground text-sm">
                Instant confirmation and secure Bitcoin transaction completed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">About</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground mt-6">
            © 2024 BitPOS
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
