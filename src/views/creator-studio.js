import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import LayoutWithSidebar from '../components/layout-with-sidebar'
import './creator-studio.css'

const CreatorStudio = (props) => {
  return (
    <div className="creator-studio-container">
      <Helmet>
        <title>
          Creator-Studio - FOTON Marketplace for NFTs and Digital Collectibles
          on Radix DLT
        </title>
        <meta
          name="description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
        <meta
          property="og:title"
          content="Creator-Studio - FOTON Marketplace for NFTs and Digital Collectibles on Radix DLT"
        />
        <meta
          property="og:description"
          content="Collect , Trade or Mint NFTs and find your Communities"
        />
      </Helmet>
      <LayoutWithSidebar rootClassName="layout-with-sidebar-root-class-name">
        <div className="creator-studio-header-creator">
          <div className="creator-studio-container01">
            <div className="creator-studio-container02">
              <div className="creator-studio-container03">
                <img
                  src="/creatorstudiologo.svg"
                  className="creator-studio-image"
                />
              </div>
              <div className="creator-studio-container04">
                <h1 className="creator-studio-text">Creator Studio</h1>
                <h1 className="creator-studio-text01">
                  <span>Version 0.1</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-buttons">
              <Link to="/add-project" className="creator-studio-navlink button">
                <span className="creator-studio-text04">
                  <span>New Project</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
          <div className="creator-studio-gray-overlay"></div>
        </div>
        <div className="creator-studio-tabs-row">
          <div className="creator-studio-container05">
            <span className="creator-studio-text07">My Projects</span>
          </div>
        </div>
        <div className="creator-studio-projects-container">
          <div className="creator-studio-container06">
            <Link to="/creator-studio-project">
              <div className="creator-studio-project">
                <div className="creator-studio-container07">
                  <img
                    src="/hexagonmaskbordergray.svg"
                    className="creator-studio-mask"
                  />
                  <img
                    src="/art_3.0_ninja__2d__game_character_._cevtore_style__t_pose_00ed9e8d-9bd5-4d11-be76-c73a71e6f04e-200h.png"
                    className="creator-studio-image1"
                  />
                </div>
                <div className="creator-studio-container08">
                  <div className="creator-studio-container09">
                    <h1 className="creator-studio-text08 Smallest">
                      <span>Role: Admin</span>
                      <br></br>
                    </h1>
                  </div>
                  <h1 className="creator-studio-text11 Heading3">
                    Project One
                  </h1>
                  <h1 className="creator-studio-text12 Content">
                    <span>2 Collections, 1500 Items</span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </Link>
            <div className="creator-studio-project1">
              <div className="creator-studio-container10">
                <img
                  src="/hexagonmaskbordergray.svg"
                  className="creator-studio-mask1"
                />
                <img
                  src="/bookblaster_cartoon_astronaut_3d_8k_rich_color_73cf7de9-2a54-498b-810b-b1990c1c5349-200h.png"
                  className="creator-studio-image2"
                />
              </div>
              <div className="creator-studio-container11">
                <div className="creator-studio-container12">
                  <h1 className="creator-studio-text15 Smallest">
                    <span>Role: Admin</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="creator-studio-text18 Heading3">Project One</h1>
                <h1 className="creator-studio-text19 Content">
                  <span>2 Collections, 1500 Items</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-project2">
              <div className="creator-studio-container13">
                <img
                  src="/hexagonmaskbordergray.svg"
                  className="creator-studio-mask2"
                />
                <img
                  src="/bookblaster_cartoon_astronaut_3d_8k_rich_color_73cf7de9-2a54-498b-810b-b1990c1c5349-200h.png"
                  className="creator-studio-image3"
                />
              </div>
              <div className="creator-studio-container14">
                <div className="creator-studio-container15">
                  <h1 className="creator-studio-text22 Smallest">
                    <span>Role: Admin</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="creator-studio-text25 Heading3">Project One</h1>
                <h1 className="creator-studio-text26 Content">
                  <span>2 Collections, 1500 Items</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-project3">
              <div className="creator-studio-container16">
                <img
                  src="/hexagonmaskbordergray.svg"
                  className="creator-studio-mask3"
                />
                <img
                  src="/bookblaster_cartoon_astronaut_3d_8k_rich_color_73cf7de9-2a54-498b-810b-b1990c1c5349-200h.png"
                  className="creator-studio-image4"
                />
              </div>
              <div className="creator-studio-container17">
                <div className="creator-studio-container18">
                  <h1 className="creator-studio-text29 Smallest">
                    <span>Role: Admin</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="creator-studio-text32 Heading3">Project One</h1>
                <h1 className="creator-studio-text33 Content">
                  <span>2 Collections, 1500 Items</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="creator-studio-project4">
              <div className="creator-studio-container19">
                <img
                  src="/hexagonmaskbordergray.svg"
                  className="creator-studio-mask4"
                />
                <img
                  src="/bookblaster_cartoon_astronaut_3d_8k_rich_color_73cf7de9-2a54-498b-810b-b1990c1c5349-200h.png"
                  className="creator-studio-image5"
                />
              </div>
              <div className="creator-studio-container20">
                <div className="creator-studio-container21">
                  <h1 className="creator-studio-text36 Smallest">
                    <span>Role: Admin</span>
                    <br></br>
                  </h1>
                </div>
                <h1 className="creator-studio-text39 Heading3">Project One</h1>
                <h1 className="creator-studio-text40 Content">
                  <span>2 Collections, 1500 Items</span>
                  <br></br>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="creator-studio-tabs-row1">
          <div className="creator-studio-container22">
            <span className="creator-studio-text43">Resources</span>
          </div>
        </div>
        <div className="creator-studio-resources">
          <div className="creator-studio-container23">
            <Link to="/creator-studio-project">
              <div className="creator-studio-item">
                <div className="creator-studio-container24">
                  <div className="creator-studio-container25">
                    <h1 className="creator-studio-text44 Smallest">
                      <span>By FOTON</span>
                      <br></br>
                    </h1>
                  </div>
                  <h1 className="creator-studio-text47 Heading3">
                    Introduction Video
                  </h1>
                  <h1 className="creator-studio-text48 Content">
                    <span>Watch how the platform works</span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </Link>
            <Link to="/creator-studio-project">
              <div className="creator-studio-item1">
                <div className="creator-studio-container26">
                  <div className="creator-studio-container27">
                    <h1 className="creator-studio-text51 Smallest">
                      <span>By FOTON</span>
                      <br></br>
                    </h1>
                  </div>
                  <h1 className="creator-studio-text54 Heading3">
                    What are NFTs?
                  </h1>
                  <h1 className="creator-studio-text55 Content">
                    <span>Short intro</span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </Link>
            <Link to="/creator-studio-project">
              <div className="creator-studio-item2">
                <div className="creator-studio-container28">
                  <div className="creator-studio-container29">
                    <h1 className="creator-studio-text58 Smallest">
                      <span>By FOTON</span>
                      <br></br>
                    </h1>
                  </div>
                  <h1 className="creator-studio-text61 Heading3">Guide Book</h1>
                  <h1 className="creator-studio-text62 Content">
                    <span>FAQ and more</span>
                    <br></br>
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </LayoutWithSidebar>
    </div>
  )
}

export default CreatorStudio
