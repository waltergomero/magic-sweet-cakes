'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, AlertCircle } from 'lucide-react'
import { SignInUserData } from '@/actions/userAuthActions'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const result = await SignInUserData(formData)
      
      if (result.isValid) {
        // Handle successful form submission
        console.log('Form is valid! Form data:', formData)
        toast.success('Successfully signed in!', {
          position: 'top-right',
          autoClose: 3000,
        })
        // You can redirect or perform other actions here
      } else {
        // Set validation errors from the SignInUserData function
        setErrors({
          email: result.errors.email || '',
          password: result.errors.password || ''
        })
        toast.error('Please fix the errors in the form', {
          position: 'top-right',
          autoClose: 4000,
        })
      }
    } catch (error) {
      console.error('Error during sign in:', error)
      toast.error('An unexpected error occurred. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <ToastContainer />
      <div className="bg-white rounded-sm shadow-xl p-6 w-full max-w-md">
        <Link href="/" className="block text-2xl font-bold text-center mb-2 text-gray-700 hover:text-gray-900 transition">Home</Link>
        <p className="text-center text-gray-600 mb-4">Sign in to get started</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none transition`}
              placeholder="Enter your email address"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <div id="email-error" className="flex items-start gap-2 mt-2 p-3 bg-red-50 border border-red-200 rounded-lg" role="alert">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm font-medium">{errors.email}</p>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 pr-12 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none transition`}
                placeholder="Enter your password"
                aria-invalid={errors.password ? 'true' : 'false'}
                aria-describedby={errors.password ? 'password-error' : undefined}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <div id="password-error" className="flex items-start gap-2 mt-2 p-3 bg-red-50 border border-red-200 rounded-lg" role="alert">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 text-sm font-medium">{errors.password}</p>
              </div>
            )}
          </div>

            <div className="flex justify-center">
            <button type="submit" className="bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg hover:bg-blue-900 transition duration-200 shadow-lg">
              Submit
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Do not have an account?{' '}
          <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignInForm