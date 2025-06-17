import { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { Smartphone, ArrowRight, Loader2 } from 'lucide-react'

interface PhoneLoginFormData {
  phone: string
}

interface PhoneLoginFormProps {
  onSubmit: (phone: string) => void
  isLoading?: boolean
}

export function PhoneLoginForm({ onSubmit, isLoading = false }: PhoneLoginFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<PhoneLoginFormData>()

  const handleFormSubmit = (data: PhoneLoginFormData) => {
    // Remove formatação do telefone antes de enviar
    const cleanPhone = data.phone.replace(/\D/g, '')
    onSubmit(cleanPhone)
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Smartphone className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Entre com seu celular</h2>
        <p className="text-gray-600">
          Vamos enviar um código de verificação para seu WhatsApp
        </p>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Número do celular
          </label>
          <InputMask
            mask="(99) 99999-9999"
            placeholder="(11) 99999-9999"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('phone', {
              required: 'Número de celular é obrigatório',
              pattern: {
                value: /^\(\d{2}\) \d{5}-\d{4}$/,
                message: 'Formato de telefone inválido'
              }
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando código...
            </>
          ) : (
            <>
              Continuar
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          Ao continuar, você concorda com nossos{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Termos de Uso
          </a>{' '}
          e{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Política de Privacidade
          </a>
        </p>
      </div>
    </div>
  )
}