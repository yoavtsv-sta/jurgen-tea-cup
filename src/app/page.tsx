import OrderButton from '@/components/OrderButton'
import TeaCupIllustration from '@/components/TeaCupIllustration'

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold tracking-wide text-stone-800">Jurgen Tea Cup Co.</span>
          <OrderButton variant="nav" />
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium tracking-widest text-amber-700 uppercase mb-4">
              Handcrafted · Limited Edition
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-stone-900 mb-6">
              Jurgen Tea Cup Co.
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed mb-8">
              The perfect cup for every tea. Handcrafted from fine stoneware,
              designed to hold heat beautifully and feel right in your hands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <OrderButton variant="primary" />
              <a href="#story" className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-stone-300 text-stone-700 font-medium hover:bg-stone-100 transition-colors">
                Our Story
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <TeaCupIllustration />
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section id="product" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-4 text-center">
            Built for the ritual
          </h2>
          <p className="text-center text-stone-500 mb-16 max-w-xl mx-auto">
            Every detail of the Jurgen cup was designed around a single question:
            what makes a great cup of tea?
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <Feature
              title="Fine Stoneware"
              description="High-fired at 1280°C for a dense, non-porous body that retains heat 40% longer than standard porcelain."
              icon="○"
            />
            <Feature
              title="Lead-Free Glaze"
              description="Food-safe, microwave- and dishwasher-safe. The matte exterior stays cool to the touch while your tea stays hot."
              icon="◇"
            />
            <Feature
              title="300ml Capacity"
              description="Sized for a single, proper cup — not an oversized mug. Two finger-loops for a secure, elegant grip."
              icon="△"
            />
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Spec label="Material" value="Fine stoneware, matte glaze" />
            <Spec label="Capacity" value="300 ml / 10 fl oz" />
            <Spec label="Dimensions" value="8 cm H × 9 cm Ø" />
            <Spec label="Weight" value="210 g" />
            <Spec label="Safe for" value="Microwave · Dishwasher · Oven (up to 250°C)" />
            <Spec label="Made in" value="Portugal" />
          </div>

          <div className="mt-16 text-center">
            <p className="text-3xl font-bold text-stone-900 mb-2">€48</p>
            <p className="text-stone-500 text-sm mb-8">Free shipping in Europe · 30-day returns</p>
            <OrderButton variant="primary" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-24 px-6 bg-amber-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">The Jurgen story</h2>
          <div className="prose prose-stone max-w-none text-stone-700 space-y-5 text-lg leading-relaxed">
            <p>
              Jurgen has been making tea for himself every morning for twenty-three years.
              He&apos;s worked through hundreds of cups — bone china, Japanese ceramics, IKEA classics —
              and none of them felt quite right.
            </p>
            <p>
              Some were too thin and cooled the tea too fast. Some were too wide and the
              aroma escaped before you could smell it. Some had handles that felt like an
              afterthought. So he designed his own.
            </p>
            <p>
              After two years of prototyping with a small atelier in Porto, the Jurgen cup exists.
              It keeps tea at the right temperature for the length of a proper cup. The narrow rim
              focuses the steam. The weight feels intentional in your hand.
            </p>
            <p>
              This is a small, careful production. Each batch is 200 cups. When they sell out,
              we wait for the next batch.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-stone-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready for your perfect cup?</h2>
          <p className="text-stone-400 mb-10 text-lg">
            €48 · Free shipping in Europe · 200 cups per batch
          </p>
          <OrderButton variant="light" />
          <p className="mt-6 text-stone-500 text-sm">
            Secure checkout via Stripe. You&apos;ll receive an order confirmation by email.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-stone-950 text-stone-600 text-sm text-center">
        <p>© {new Date().getFullYear()} Jurgen Tea Cup Co. · Made with care in Portugal</p>
      </footer>
    </main>
  )
}

function Feature({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl text-amber-600 mb-4">{icon}</div>
      <h3 className="font-semibold text-stone-900 mb-2">{title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-stone-100">
      <span className="text-stone-500 text-sm">{label}</span>
      <span className="text-stone-800 font-medium text-sm">{value}</span>
    </div>
  )
}
