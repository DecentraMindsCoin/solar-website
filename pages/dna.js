function dna() {
    return (
        <div>
                   <object
        className='w-full flex h-screen'
          data='/pdf/dnasolar.pdf'
          type="application/pdf"
          width="500"
          height="678"
        >
  
          <iframe
            src='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'
            width="500"
            height="678"
          >
          <p>This browser does not support PDF!</p>
          </iframe>
  
        </object>
        </div>
    )
}

export default dna
