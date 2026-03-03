import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface HomeProps {
  onNavigateToMaterials: () => void;
}

export default function Home({ onNavigateToMaterials }: HomeProps) {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen bg-gradient-to-br from-[#3D3A35] via-[#4A4540] to-[#3D3A35] text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#2B93C7] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2B93C7] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <Sparkles size={16} className="mr-2 text-[#2B93C7]" />
              <span className="text-sm">Perfeição em cada detalhe</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              Quer <span className="text-[#2B93C7] font-normal">manter</span>
              <br />
              o mármore sempre
              <br />
              <span className="text-[#2B93C7] font-normal">bonito?</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Comece com esses <span className="text-[#2B93C7] font-medium">cuidados simples</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onNavigateToMaterials}
                className="group px-8 py-4 bg-[#2B93C7] text-white rounded-full hover:bg-[#2380b0] transition-all duration-300 flex items-center justify-center text-lg"
              >
                Explorar Materiais
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <a
                href="#contato"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center text-lg"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Cuidados <span className="text-[#2B93C7]">Essenciais</span>
            </h2>
            <p className="text-gray-600 text-lg">Mantenha seu mármore sempre impecável</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 hover:border-[#2B93C7] transition-all duration-300 h-full hover:shadow-xl">
                <div className="w-16 h-16 bg-[#2B93C7]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="text-[#2B93C7]" size={32} />
                </div>
                <h3 className="text-2xl font-medium mb-4">Evite produtos abrasivos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Use apenas detergente neutro e pano macio. Produtos químicos agressivos podem danificar o acabamento.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 hover:border-[#2B93C7] transition-all duration-300 h-full hover:shadow-xl">
                <div className="w-16 h-16 bg-[#2B93C7]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="text-[#2B93C7]" size={32} />
                </div>
                <h3 className="text-2xl font-medium mb-4">Limpe líquidos imediatamente</h3>
                <p className="text-gray-600 leading-relaxed">
                  Quanto mais rápido limpar, menor o risco de manchas. Seque completamente após a limpeza.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 hover:border-[#2B93C7] transition-all duration-300 h-full hover:shadow-xl">
                <div className="w-16 h-16 bg-[#2B93C7]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="text-[#2B93C7]" size={32} />
                </div>
                <h3 className="text-2xl font-medium mb-4">Faça impermeabilização periódica</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ela ajuda a preservar a durabilidade da pedra e protege contra manchas e desgaste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2B93C7] to-[#2380b0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              Confie em quem <span className="font-normal">entende</span>
              <br />
              de <span className="font-normal">perfeição!</span>
            </h2>
            <p className="text-xl mb-12 text-white/90 leading-relaxed">
              Seu projeto merece o <span className="font-medium">brilho</span> e a <span className="font-medium">elegância</span> que impressionam.
            </p>
            <button
              onClick={onNavigateToMaterials}
              className="group px-10 py-5 bg-white text-[#2B93C7] rounded-full hover:bg-gray-100 transition-all duration-300 text-lg font-medium inline-flex items-center"
            >
              Peça já seu orçamento
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light mb-4">
                Cozinha com aquele acabamento
                <br />
                que faz <span className="text-[#2B93C7]">toda a diferença</span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-3xl border border-gray-200">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2B93C7] focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2B93C7] focus:border-transparent outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2B93C7] focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2B93C7] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#2B93C7] text-white rounded-full hover:bg-[#2380b0] transition-colors text-lg font-medium"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
