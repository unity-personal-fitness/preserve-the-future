import { ArrowRight, Heart } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

function StatCard({ endValue, label, isCurrency = false }: { endValue: number; label: string; isCurrency?: boolean }) {
  const { count, ref } = useCountUp(endValue, 4000);

  return (
    <div ref={ref} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm">
      <div className="text-3xl font-bold text-emerald-600 mb-1">
        {isCurrency ? '$' : ''}{count}{endValue === 500 ? '+' : isCurrency ? 'M+' : ''}
      </div>
      <div className="text-sm text-gray-700 font-medium">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 overflow-hidden" style={{backgroundImage: 'linear-gradient(135deg, rgba(5, 150, 105, 0.75) 0%, rgba(20, 184, 166, 0.75) 100%), url("https://plus.unsplash.com/premium_photo-1661775317533-2163ba4dbc93?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Rebuilding Lives.<br />
            Restoring Hope.<br />
            <span className="text-amber-300">Preserving the Future.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/95 mb-6 leading-relaxed max-w-3xl mx-auto">
            Empowering families and communities in western Jamaica to recover, rebuild, and thrive
            after the devastating impact of Hurricane Melissa. Your support creates lasting change.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              <a href="https://gofund.me/1773eea41" target="_blank"> Donate Now </a>
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
            </button>

            <button className="group bg-white hover:bg-gray-50 text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 border-emerald-600 flex items-center gap-2">
              Get Involved
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <StatCard endValue={500} label="Families Supported" />
            <StatCard endValue={15} label="Communities Rebuilt" />
            <StatCard endValue={2} label="In Aid Delivered" isCurrency={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
