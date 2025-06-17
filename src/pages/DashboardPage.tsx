import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <Home className="h-4 w-4" />
            Início
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="text-sm text-gray-500">Saldo Total</div>
              <div className="text-2xl font-bold text-gray-900">R$ 0,00</div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="text-sm text-gray-500">Receitas</div>
              <div className="text-2xl font-bold text-green-600">R$ 0,00</div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="text-sm text-gray-500">Despesas</div>
              <div className="text-2xl font-bold text-red-600">R$ 0,00</div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="text-sm text-gray-500">Investimentos</div>
              <div className="text-2xl font-bold text-blue-600">R$ 0,00</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Gastos por Categoria</h2>
              <div className="text-gray-500 text-center py-8">
                Nenhum dado disponível
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Fluxo de Caixa</h2>
              <div className="text-gray-500 text-center py-8">
                Nenhum dado disponível
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}