import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './collection-items-container.css'

const CollectionItemsContainer = (props) => {
  return (
    <div className="collection-items-container-collection-items-container">
      <div className="collection-items-container-container">
        <div className="collection-items-container-filters-side-menu">
          <div className="collection-items-container-header-sticky-mobile">
            <div className="collection-items-container-header-filter-menu">
              <div className="collection-items-container-container01">
                <span className="collection-items-container-text">
                  <span className="collection-items-container-text01">
                    Filters
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="collection-items-container-apply-button">
                <span className="collection-items-container-text03">
                  <span className="collection-items-container-text04">
                    Apply
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="collection-items-container-close-button">
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-items-container-icon"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="collection-items-container-big-button">
              <div className="collection-items-container-submit">
                <button className="collection-items-container-button button">
                  <span className="collection-items-container-text06">
                    <span>Apply</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="collection-items-container-accordion">
            <div className="collection-items-container-accordion-header">
              <div className="collection-items-container-container02">
                <span className="collection-items-container-text09">
                  <span className="collection-items-container-text10">
                    Rarity Rank
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="collection-items-container-container03">
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-items-container-icon02"
                >
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
            </div>
            <div className="collection-items-container-accordion-drawer">
              <div className="collection-items-container-range">
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="1"
                  className="collection-items-container-textinput focus-reset-forms input Content16SemiBold"
                />
                <span className="collection-items-container-text12">To</span>
                <input
                  type="text"
                  enctype="The Funky Apes Crew..."
                  placeholder="350"
                  className="collection-items-container-textinput1 focus-reset-forms Content16SemiBold input"
                />
              </div>
              <div className="collection-items-container-submit1">
                <button className="collection-items-container-button1 button">
                  <span className="collection-items-container-text13">
                    <span>Apply</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="collection-items-container-accordion1">
            <div className="collection-items-container-accordion-header1">
              <div className="collection-items-container-container04">
                <span className="collection-items-container-text16">
                  <span className="collection-items-container-text17">
                    Status
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="collection-items-container-container05">
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-items-container-icon04"
                >
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
            </div>
            <div className="collection-items-container-accordion-drawer1">
              <div className="collection-items-container-accordion-item">
                <div className="collection-items-container-container06">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox"
                  />
                  <span className="collection-items-container-text19">
                    Listed
                  </span>
                </div>
                <span className="collection-items-container-how-many">20</span>
              </div>
              <div className="collection-items-container-accordion-item01">
                <div className="collection-items-container-container07">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox01"
                  />
                  <span className="collection-items-container-text20">
                    Unlisted
                  </span>
                </div>
                <span className="collection-items-container-how-many01">
                  80
                </span>
              </div>
              <div className="collection-items-container-accordion-item02">
                <div className="collection-items-container-container08">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox02"
                  />
                  <span className="collection-items-container-text21">
                    Has Offers
                  </span>
                </div>
                <span className="collection-items-container-how-many02">4</span>
              </div>
              <div className="collection-items-container-accordion-item03">
                <div className="collection-items-container-container09">
                  <input
                    type="checkbox"
                    checked
                    className="collection-items-container-checkbox03"
                  />
                  <span className="collection-items-container-text22">
                    Auctioned
                  </span>
                </div>
                <span className="collection-items-container-how-many03">4</span>
              </div>
            </div>
          </div>
          <div className="collection-items-container-separation-line"></div>
          <div className="collection-items-container-accordion2">
            <div className="collection-items-container-accordion-header2">
              <div className="collection-items-container-container10">
                <span className="collection-items-container-text23">
                  Attribute one
                </span>
              </div>
              <div className="collection-items-container-container11">
                <span className="collection-items-container-how-many04">
                  328
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-items-container-icon06"
                >
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
            </div>
            <div className="collection-items-container-accordion-drawer2">
              <div className="collection-items-container-accordion-item04">
                <div className="collection-items-container-container12">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox04"
                  />
                  <span className="collection-items-container-text24">
                    Trait nr 1
                  </span>
                </div>
                <span className="collection-items-container-how-many05">
                  328
                </span>
              </div>
              <div className="collection-items-container-accordion-item05">
                <div className="collection-items-container-container13">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox05"
                  />
                  <span className="collection-items-container-text25">
                    Trait nr 2
                  </span>
                </div>
                <span className="collection-items-container-how-many06">
                  328
                </span>
              </div>
              <div className="collection-items-container-accordion-item06">
                <div className="collection-items-container-container14">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox06"
                  />
                  <span className="collection-items-container-text26">
                    Trait nr 3
                  </span>
                </div>
                <span className="collection-items-container-how-many07">
                  328
                </span>
              </div>
            </div>
          </div>
          <div className="collection-items-container-accordion3">
            <div className="collection-items-container-accordion-header3">
              <div className="collection-items-container-container15">
                <span className="collection-items-container-text27">
                  Attribute two
                </span>
              </div>
              <div className="collection-items-container-container16">
                <span className="collection-items-container-how-many08">
                  328
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="collection-items-container-icon08"
                >
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
            </div>
            <div className="collection-items-container-accordion-drawer3">
              <div className="collection-items-container-accordion-item07">
                <div className="collection-items-container-container17">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox07"
                  />
                  <span className="collection-items-container-text28">
                    Trait nr 1
                  </span>
                </div>
                <span className="collection-items-container-how-many09">
                  328
                </span>
              </div>
              <div className="collection-items-container-accordion-item08">
                <div className="collection-items-container-container18">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox08"
                  />
                  <span className="collection-items-container-text29">
                    Trait nr 2
                  </span>
                </div>
                <span className="collection-items-container-how-many10">
                  328
                </span>
              </div>
              <div className="collection-items-container-accordion-item09">
                <div className="collection-items-container-container19">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox09"
                  />
                  <span className="collection-items-container-text30">
                    Trait nr 3
                  </span>
                </div>
                <span className="collection-items-container-how-many11">
                  328
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="collection-items-container-grid-items">
          <div className="collection-items-container-container20">
            <Link to="/item-page">
              <div className="collection-items-container-item1">
                <div className="collection-items-container-image-header">
                  <input
                    type="checkbox"
                    className="collection-items-container-checkbox10"
                  />
                </div>
                <div className="collection-items-container-text-box">
                  <div className="collection-items-container-container21">
                    <span className="collection-items-container-text31">
                      {props.text}
                    </span>
                  </div>
                  <div className="collection-items-container-container22">
                    <div className="collection-items-container-floor">
                      <span className="collection-items-container-text32 SmallestLabels">
                        {props.text8}
                      </span>
                      <span className="collection-items-container-text33 Content16SemiBold">
                        {props.text9}
                      </span>
                    </div>
                    <div className="collection-items-container-volume24">
                      <span className="collection-items-container-text34 SmallestLabels">
                        {props.text10}
                      </span>
                      <div className="collection-items-container-container23">
                        <span className="collection-items-container-text35">
                          {props.text32}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="collection-items-container-item11">
              <div className="collection-items-container-image-header1">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox11"
                />
              </div>
              <div className="collection-items-container-text-box1">
                <div className="collection-items-container-container24">
                  <span className="collection-items-container-text36">
                    {props.text1}
                  </span>
                </div>
                <div className="collection-items-container-container25">
                  <div className="collection-items-container-floor1">
                    <span className="collection-items-container-text37 SmallestLabels">
                      {props.text11}
                    </span>
                    <span className="collection-items-container-text38 Content16SemiBold">
                      {props.text12}
                    </span>
                  </div>
                  <div className="collection-items-container-volume241">
                    <span className="collection-items-container-text39 SmallestLabels">
                      {props.text13}
                    </span>
                    <div className="collection-items-container-container26">
                      <span className="collection-items-container-text40">
                        {props.text33}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-items-container-item12">
              <div className="collection-items-container-image-header2">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox12"
                />
              </div>
              <div className="collection-items-container-text-box2">
                <div className="collection-items-container-container27">
                  <span className="collection-items-container-text41">
                    {props.text2}
                  </span>
                </div>
                <div className="collection-items-container-container28">
                  <div className="collection-items-container-floor2">
                    <span className="collection-items-container-text42 SmallestLabels">
                      {props.text14}
                    </span>
                    <span className="collection-items-container-text43 Content16SemiBold">
                      {props.text15}
                    </span>
                  </div>
                  <div className="collection-items-container-volume242">
                    <span className="collection-items-container-text44 SmallestLabels">
                      {props.text16}
                    </span>
                    <div className="collection-items-container-container29">
                      <span className="collection-items-container-text45">
                        {props.text34}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-items-container-item13">
              <div className="collection-items-container-image-header3">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox13"
                />
              </div>
              <div className="collection-items-container-text-box3">
                <div className="collection-items-container-container30">
                  <span className="collection-items-container-text46">
                    {props.text3}
                  </span>
                </div>
                <div className="collection-items-container-container31">
                  <div className="collection-items-container-floor3">
                    <span className="collection-items-container-text47 SmallestLabels">
                      {props.text17}
                    </span>
                    <span className="collection-items-container-text48 Content16SemiBold">
                      {props.text18}
                    </span>
                  </div>
                  <div className="collection-items-container-volume243">
                    <span className="collection-items-container-text49 SmallestLabels">
                      {props.text19}
                    </span>
                    <div className="collection-items-container-container32">
                      <span className="collection-items-container-text50">
                        {props.text35}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-items-container-item14">
              <div className="collection-items-container-image-header4">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox14"
                />
              </div>
              <div className="collection-items-container-text-box4">
                <div className="collection-items-container-container33">
                  <span className="collection-items-container-text51">
                    {props.text4}
                  </span>
                  <div className="collection-items-container-container34">
                    <span className="collection-items-container-text52">
                      # 2537
                    </span>
                  </div>
                </div>
                <div className="collection-items-container-container35">
                  <div className="collection-items-container-floor4">
                    <span className="collection-items-container-text53 SmallestLabels">
                      {props.text20}
                    </span>
                    <span className="collection-items-container-text54 Content16SemiBold">
                      {props.text21}
                    </span>
                  </div>
                  <div className="collection-items-container-volume244">
                    <span className="collection-items-container-text55 SmallestLabels">
                      {props.text22}
                    </span>
                    <div className="collection-items-container-container36">
                      <span className="collection-items-container-text56">
                        {props.text36}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-items-container-item15">
              <div className="collection-items-container-image-header5">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox15"
                />
              </div>
              <div className="collection-items-container-text-box5">
                <div className="collection-items-container-container37">
                  <span className="collection-items-container-text57">
                    {props.text5}
                  </span>
                </div>
                <div className="collection-items-container-container38">
                  <div className="collection-items-container-floor5">
                    <span className="collection-items-container-text58 SmallestLabels">
                      {props.text23}
                    </span>
                    <span className="collection-items-container-text59 Content16SemiBold">
                      {props.text24}
                    </span>
                  </div>
                  <div className="collection-items-container-volume245">
                    <span className="collection-items-container-text60 SmallestLabels">
                      {props.text25}
                    </span>
                    <div className="collection-items-container-container39">
                      <span className="collection-items-container-text61">
                        {props.text37}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-items-container-item16">
              <div className="collection-items-container-image-header6">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox16"
                />
              </div>
              <div className="collection-items-container-text-box6">
                <div className="collection-items-container-container40">
                  <span className="collection-items-container-text62">
                    {props.text6}
                  </span>
                </div>
                <div className="collection-items-container-container41">
                  <div className="collection-items-container-floor6">
                    <span className="collection-items-container-text63 SmallestLabels">
                      {props.text26}
                    </span>
                    <span className="collection-items-container-text64 Content16SemiBold">
                      {props.text27}
                    </span>
                  </div>
                  <div className="collection-items-container-volume246">
                    <span className="collection-items-container-text65 SmallestLabels">
                      {props.text28}
                    </span>
                    <div className="collection-items-container-container42">
                      <span className="collection-items-container-text66">
                        {props.text38}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-items-container-item17">
              <div className="collection-items-container-image-header7">
                <input
                  type="checkbox"
                  className="collection-items-container-checkbox17"
                />
              </div>
              <div className="collection-items-container-text-box7">
                <div className="collection-items-container-container43">
                  <span className="collection-items-container-text67">
                    {props.text7}
                  </span>
                </div>
                <div className="collection-items-container-container44">
                  <div className="collection-items-container-floor7">
                    <span className="collection-items-container-text68 SmallestLabels">
                      {props.text29}
                    </span>
                    <span className="collection-items-container-text69 Content16SemiBold">
                      {props.text30}
                    </span>
                  </div>
                  <div className="collection-items-container-volume247">
                    <span className="collection-items-container-text70 SmallestLabels">
                      {props.text31}
                    </span>
                    <div className="collection-items-container-container45">
                      <span className="collection-items-container-text71">
                        {props.text39}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CollectionItemsContainer.defaultProps = {
  text35: '3',
  text14: 'Price',
  text20: 'Price',
  text23: 'Price',
  text27: '16700 XRD',
  text16: 'LISTED',
  text1: 'Item one',
  text8: 'Price',
  text37: '2 offers',
  text22: 'LISTED',
  text10: 'LISTED',
  text19: 'LISTED',
  text33: 'no offers',
  text36: '4',
  text24: '16700 XRD',
  text38: '2 offers',
  text39: '2 offers',
  text25: 'LISTED',
  text13: 'UNlisted',
  text17: 'Price',
  text3: 'Item one',
  text18: '16700 XRD',
  text12: '16700 XRD',
  text9: '16700 XRD',
  text5: 'Item one',
  text21: '16700 XRD',
  text29: 'Price',
  text2: 'Item one',
  text15: '16700 XRD',
  text32: '2 offers',
  text11: 'Price',
  text26: 'Price',
  text31: 'LISTED',
  text34: '2 offers',
  text: 'Item one',
  text28: 'LISTED',
  text7: 'Item one',
  text4: 'Item one',
  text6: 'Item one',
  text30: '16700 XRD',
}

CollectionItemsContainer.propTypes = {
  text35: PropTypes.string,
  text14: PropTypes.string,
  text20: PropTypes.string,
  text23: PropTypes.string,
  text27: PropTypes.string,
  text16: PropTypes.string,
  text1: PropTypes.string,
  text8: PropTypes.string,
  text37: PropTypes.string,
  text22: PropTypes.string,
  text10: PropTypes.string,
  text19: PropTypes.string,
  text33: PropTypes.string,
  text36: PropTypes.string,
  text24: PropTypes.string,
  text38: PropTypes.string,
  text39: PropTypes.string,
  text25: PropTypes.string,
  text13: PropTypes.string,
  text17: PropTypes.string,
  text3: PropTypes.string,
  text18: PropTypes.string,
  text12: PropTypes.string,
  text9: PropTypes.string,
  text5: PropTypes.string,
  text21: PropTypes.string,
  text29: PropTypes.string,
  text2: PropTypes.string,
  text15: PropTypes.string,
  text32: PropTypes.string,
  text11: PropTypes.string,
  text26: PropTypes.string,
  text31: PropTypes.string,
  text34: PropTypes.string,
  text: PropTypes.string,
  text28: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  text6: PropTypes.string,
  text30: PropTypes.string,
}

export default CollectionItemsContainer
