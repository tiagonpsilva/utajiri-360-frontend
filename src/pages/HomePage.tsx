import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PhoneLoginForm } from '../components/PhoneLoginForm'
import { OTPVerificationModal } from '../components/OTPVerificationModal'

export function HomePage() {
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false)
  const [currentPhone, setCurrentPhone] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handlePhoneSubmit = async (phone: string) => {
    setIsLoading(true)
    setCurrentPhone(phone)
    
    // Simular envio do código
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsOTPModalOpen(true)
  }

  const handleOTPVerify = async (code: string) => {
    setIsLoading(true)
    
    // Simular verificação do código
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    setIsOTPModalOpen(false)
    
    // Redirecionar para o dashboard
    navigate('/dashboard')
  }

  const handleResendOTP = async () => {
    // Simular reenvio do código
    console.log('Reenviando código para:', currentPhone)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M3</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Utajiri 360</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Controle total do seu
                <span className="text-blue-600"> dinheiro</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Gerencie receitas, despesas e investimentos em um só lugar. 
                Interface intuitiva, categorização automática e insights inteligentes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Análise Inteligente</h3>
                <p className="text-sm text-gray-600">Categorização automática das suas transações</p>
              </div>

              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Múltiplas Fontes</h3>
                <p className="text-sm text-gray-600">Bancos, cartões e investimentos unidos</p>
              </div>

              <div className="text-center md:text-left">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Mobile First</h3>
                <p className="text-sm text-gray-600">Perfeito para usar no seu celular</p>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex justify-center lg:justify-end">
            <PhoneLoginForm 
              onSubmit={handlePhoneSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>

      {/* OTP Verification Modal */}
      <OTPVerificationModal
        isOpen={isOTPModalOpen}
        onClose={() => setIsOTPModalOpen(false)}
        onVerify={handleOTPVerify}
        onResend={handleResendOTP}
        phone={currentPhone}
        isLoading={isLoading}
      />
    </div>
  )
}