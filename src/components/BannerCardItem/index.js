import './index.css'

const Banner = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <div className="list-container">
      <li className={className}>
        <h1 className="headers">{headerText}</h1>
        <p className="descriptions">{description}</p>
        <div>
          <button className="buttons"> Show More </button>
        </div>
      </li>
    </div>
  )
}

export default Banner
