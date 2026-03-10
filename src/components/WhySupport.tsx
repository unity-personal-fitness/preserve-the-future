import { Heart, Shield, TrendingUp, ArrowRight } from 'lucide-react';

export default function WhySupport() {
  return (
    <section className="py-20 bg-white relative" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.98), rgba(255,255,255,0.98)), url("https://images.pexels.com/photos/3771104/pexels-photo-3771104.jpeg?auto=compress&cs=tinysrgb&w=1600")', backgroundSize: 'cover', backgroundPosition: 'center right', backgroundAttachment: 'fixed'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Your Support Matters
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Every contribution directly transforms lives. Your generosity provides immediate relief
              and builds lasting change for families working to rebuild their future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                100% of your donation goes directly to relief efforts, rebuilding projects,
                and community support programs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full Transparency</h3>
              <p className="text-gray-700 leading-relaxed">
                We provide detailed reports on how funds are used and the impact created in
                each community we serve.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Change</h3>
              <p className="text-gray-700 leading-relaxed">
                We focus on long-term solutions that empower communities to thrive independently
                and build resilience.
              </p>
            </div>
          </div>

          <div className="rounded-3xl p-10 md:p-12 border border-emerald-100 relative overflow-hidden" style={{backgroundImage: 'linear-gradient(135deg, rgba(16, 185, 129, 0.95) 0%, rgba(251, 191, 36, 0.95) 100%), url("https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Your donation rebuilds more than homes
              </h3>
              <p className="text-lg text-white/95 mb-8 leading-relaxed">
                It restores hope, dignity, and opportunity. It tells families they're not alone.
                It creates a future where communities can not only recover, but flourish.
              </p>
              <button className="group bg-white hover:bg-gray-100 text-emerald-700 px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3">
               <a href="https://gofund.me/1773eea41" target="_blank"> Make an Impact Today </a> 
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
