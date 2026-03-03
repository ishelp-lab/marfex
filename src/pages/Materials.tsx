import { useEffect, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Material } from '../types/material';

export default function Materials() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [filteredMaterials, setFilteredMaterials] = useState<Material[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedColor, setSelectedColor] = useState<string>('Todos');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMaterials();
  }, []);

  useEffect(() => {
    filterMaterials();
  }, [searchTerm, selectedCategory, selectedColor, materials]);

  const fetchMaterials = async () => {
    const { data, error } = await supabase
      .from('materials')
      .select('*')
      .eq('available', true)
      .order('name');

    if (!error && data) {
      setMaterials(data);
      setFilteredMaterials(data);
    }
    setLoading(false);
  };

  const filterMaterials = () => {
    let filtered = materials;

    if (searchTerm) {
      filtered = filtered.filter(
        (material) =>
          material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          material.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter((material) => material.category === selectedCategory);
    }

    if (selectedColor !== 'Todos') {
      filtered = filtered.filter((material) => material.color === selectedColor);
    }

    setFilteredMaterials(filtered);
  };

  const categories = ['Todos', ...Array.from(new Set(materials.map((m) => m.category)))];
  const colors = ['Todos', ...Array.from(new Set(materials.map((m) => m.color)))];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#3D3A35] via-[#4A4540] to-[#3D3A35] text-white py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#2B93C7] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2B93C7] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Beleza natural que
              <br />
              <span className="text-[#2B93C7] font-normal">transforma ambientes</span>
            </h1>
            <p className="text-xl text-gray-300">
              Escolha o mármore ideal e leve sofisticação para cada espaço
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar materiais..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2B93C7] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="flex gap-4 flex-wrap lg:flex-nowrap">
              <div className="relative flex-1 lg:w-48">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2B93C7] focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative flex-1 lg:w-48">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2B93C7] focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer"
                >
                  {colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              {filteredMaterials.length} {filteredMaterials.length === 1 ? 'material encontrado' : 'materiais encontrados'}
            </p>
            {(searchTerm || selectedCategory !== 'Todos' || selectedColor !== 'Todos') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Todos');
                  setSelectedColor('Todos');
                }}
                className="text-sm text-[#2B93C7] hover:underline"
              >
                Limpar filtros
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-[#2B93C7] border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Carregando materiais...</p>
            </div>
          ) : filteredMaterials.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">Nenhum material encontrado com os filtros selecionados.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMaterials.map((material) => (
                <div
                  key={material.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#2B93C7] transition-all duration-300 hover:shadow-xl"
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    {material.image_url ? (
                      <img
                        src={material.image_url}
                        alt={material.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span className="text-4xl font-light">{material.name.charAt(0)}</span>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="inline-block px-3 py-1 bg-[#2B93C7] text-white text-xs font-medium rounded-full">
                        {material.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-medium mb-2 text-gray-900">{material.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{material.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Cor:</span>
                        <span className="font-medium text-gray-900">{material.color}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Acabamento:</span>
                        <span className="font-medium text-gray-900">{material.finish}</span>
                      </div>
                      {material.application && (
                        <div className="flex items-start justify-between text-sm">
                          <span className="text-gray-500">Aplicação:</span>
                          <span className="font-medium text-gray-900 text-right">{material.application}</span>
                        </div>
                      )}
                    </div>

                    <button className="mt-6 w-full px-4 py-2.5 bg-[#2B93C7] text-white rounded-xl hover:bg-[#2380b0] transition-colors text-sm font-medium">
                      Solicitar Orçamento
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
