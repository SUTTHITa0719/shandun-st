import ErrorPage from './errorPage'

export default function InternalServerErrorPage() {
  return (
    <ErrorPage
      code={500}
      title="Something went wrong."
      message1="We're sorry, but something went wrong on our end."
      message2="Please try again later or contact support if the issue persists."
    />
  )
}
