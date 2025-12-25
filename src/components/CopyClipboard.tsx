import { Mail } from '@/assets/svg/main'

import { useToast } from '../hooks/use-toast'

const CopyClipboard = () => {
  const { toast } = useToast()
  const value = 'abraham.chafloque.a@uni,pe'
  const copyToClipboard = async (value: string) => {
    await navigator.clipboard.writeText(value)
    toast({
      title: 'Copied!',
      description: 'The email has been copied to the clipboard',
      duration: 2500,
    })
  }
  return (
    <button onClick={() => copyToClipboard(value)}>
      <Mail />
    </button>
  )
}

export { CopyClipboard }
