import Image from 'next/image'

const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '3rem' }}>
      <time>{YEAR}</time> © Joel P. Mugalu.
      <a>
        <Image src="/images/signatture.png" width={250} height={62.5} alt="signature" />
      </a>
      <style jsx>{`
        a{
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
