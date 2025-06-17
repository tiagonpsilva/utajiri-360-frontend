import { useState, useRef, useEffect } from 'react'
import { X, MessageCircle, RotateCcw } from 'lucide-react'

interface OTPVerificationModalProps {
  isOpen: boolean
  onClose: () => void
  onVerify: (code: string) => void
  onResend: () => void
  phone: string
  isLoading?: boolean
}

export function OTPVerificationModal({ 
  isOpen, 
  onClose, 
  onVerify, 
  onResend, 
  phone,
  isLoading = false 
}: OTPVerificationModalProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [timeLeft, setTimeLeft] = useState(60)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (isOpen && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, timeLeft])

  useEffect(() => {
    if (isOpen) {
      inputRefs.current[0]?.focus()
    }
  }, [isOpen])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }

    // Auto-submit when all fields are filled
    if (newOtp.every(digit => digit !== '') && value) {
      onVerify(newOtp.join(''))
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleResend = () => {
    setTimeLeft(60)
    setOtp(['', '', '', '', '', ''])
    onResend()
  }

  const formatPhone = (phone: string) => {
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Código enviado!
          </h2>
          <p className="text-gray-600">
            Digite o código de 6 dígitos enviado para
          </p>
          <p className="font-semibold text-gray-900">
            {formatPhone(phone)}
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-3 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={el => inputRefs.current[index] = el}
                type="text"
                maxLength={1}
                value={digit}
                onChange={e => handleChange(index, e.target.value)}
                onKeyDown={e => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                disabled={isLoading}
              />
            ))}
          </div>

          <div className="text-center">
            {timeLeft > 0 ? (
              <p className="text-gray-500">
                Reenviar código em {timeLeft}s
              </p>
            ) : (
              <button
                onClick={handleResend}
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-4 h-4" />
                Reenviar código
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Não recebeu o código? Verifique sua conexão ou tente novamente
          </p>
        </div>
      </div>
    </div>
  )
}