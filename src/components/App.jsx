function App() {
  const conStyle = {
    // // margin: "2%",
    // paddingLeft: "250px",
    height: "auto",
    width: "auto"
  };
  const hStyle = {
    fontSize: "30px",
    position: "relative",
    top: "12px"
  };
  const colSpan = {
    color: "orange"
  };
  const headStyle = {
    // border:"1px solid black",
    width: "678px"
  };
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    paddingLeft: "20px",
    position: "relative",
    bottom: "45px",
    left: "250px",
    fontWeight: "bolder",
    fontSize: "16px"
  };
  const iconStyle = {
    width: "25px",
    height: "25px",
    position: "relative",
    left: "300px",
    bottom: "35px",
    marginRight: "20px"
  };
  const barStyle = {
    border: "1px solid #c2c2c2",
    width: "950px",
    position: "relative",
    bottom: "20px",
    opacity: "0.2"
  };
  const borStyle = {
    border: "1px solid black",
    width: "70px"
  };
  const bodyStyle = {
    marginTop: "100px"
  };
  const hcolStyle = {
    color: "orange",
    fontSize: "30px",
    position: "relative",
    bottom: "48px",
    left: "80px"
  };
  const orStyle = {
    color: "orange"
  };
  const bodStyle = {
    fontSize: "40px",
    position: "relative",
    bottom: "50px",
    letterSpacing: "1rem"
  };
  const placeStyle = {
    // border:"1px solid black",
    width: "500px",
    lineHeight: "1.5",
    fontWeight: "lighter",
    opacity: "0.7",
    position: "relative",
    bottom: "40px"
  };
  const imageStyle = {
    width: "450px",
    height: "450px",
    position: "relative",
    left: "650px",
    bottom: "300px",
    border: "none"
  };
  const butStyle = {
    width: "200px",
    borderRadius: "100px",
    height: "50px",
    backgroundColor: "darkorange",
    color: "#fff",
    border: "none",
    position: "relative",
    bottom: "400px",
    right: "450px",
    cursor: "pointer"
  };
  const playStyle = {
    marginLeft: "20px",
    cursor: "pointer",
    position: "relative",
    bottom: "380px",
    right: "450px"
  };
  const addStyle = {
    paddingLeft: "50px",
    marginLeft: "20px"
  };
  const socStyle = {
    paddingLeft: "50px",
    marginLeft: "20px"
  };
  const servStyle = {
    paddingLeft: "50px",
    marginLeft: "20px"
  };
  const tactStyle = {
    paddingLeft: "50px",
    marginLeft: "20px"
  };
  const footStyle = {
    backgroundColor: "orange",
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gridGap: "40px",
    position: "relative",
    bottom: "300px"
  };
  const icStyle = {
    width: "20px",
    height: "20px"
  };
  return (
    <div style={conStyle}>
      <div style={headStyle}>
        <h1 style={hStyle}>
          NELSON <span style={colSpan}>ROCKS</span>
        </h1>
        <a href="" style={linkStyle}>
          Home
        </a>
        <a href="" style={linkStyle}>
          About Us
        </a>
        <a href="" style={linkStyle}>
          Services
        </a>
        <a href="" style={linkStyle}>
          Contact
        </a>
        <a href="" style={linkStyle}>
          Portfolio
        </a>
        <a href="" style={linkStyle}>
          Blog
        </a>
        <img
          style={iconStyle}
          src="https://img.icons8.com/material-rounded/24/000000/facebook-f--v2.png"
        />
        <img
          style={iconStyle}
          src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"
        />
        <img
          style={iconStyle}
          src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
        />
        <img
          style={iconStyle}
          src="https://img.icons8.com/windows/32/000000/google-plus.png"
        />
        <div style={barStyle}></div>
      </div>
      <div style={bodyStyle}>
        <div style={borStyle}></div>
        <h3 style={hcolStyle}>CREATIVE & CLEAN</h3>
        <h1 style={bodStyle}>
          MY NAME IS <span style={orStyle}>NKEM</span>.
        </h1>
        <p style={placeStyle}>
          Founded in 2016 by designers RocketPort, Zoubdesign is a global brand
          and design agency with offices in the creative hubs of London and San
          Francisco
        </p>
        <img
          style={imageStyle}
          src="https://th.bing.com/th/id/R.e48960343df596fab90b1622c8d72fe9?rik=7fcyVXWnV0eLjA&pid=ImgRaw&r=0"
        />
        <button style={butStyle}>Get a quote</button>
        <img
          style={playStyle}
          src="https://img.icons8.com/ios-filled/50/000000/play-button-circled--v1.png"
        />
      </div>
      <div style={footStyle}>
        <div style={tactStyle}>
          <h2>Contacts</h2>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png" />
          <h4>+234-706-177-0760</h4>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png" />
          <h4>+234-706-177-0760</h4>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png" />
          <h4>+234-803-574-0288</h4>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png" />
          <h4>+234-803-307-6151</h4>
        </div>
        <div style={servStyle}>
          <h2>Services</h2>
          <h4>Provides latest news in the photography world</h4>
          <h4>Buys and sells Camera Equipments to users</h4>
          <h4>Available freelancers to any customer event</h4>
          <h4>Our products can be bought at any wide range</h4>
        </div>
        <div style={addStyle}>
          <h2>Address</h2>
          <img src="https://img.icons8.com/material-rounded/24/000000/cottage--v2.png" />
          <h4>35, Olowu Street, Ikeja</h4>
          <img src="https://img.icons8.com/material-rounded/24/000000/mail.png" />
          <h4>info35@gmail.com</h4>
        </div>
        <div style={socStyle}>
          <h2>Contacts</h2>
          <img
            style={icStyle}
            src="https://img.icons8.com/material-rounded/24/000000/facebook-f--v2.png"
          />
          <h4>@nelsonrocks</h4>
          <img
            style={icStyle}
            src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"
          />
          <h4>@nelsonrocks</h4>
          <img
            style={icStyle}
            src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
          />
          <h4>@nelsonrocks</h4>
        </div>
      </div>
    </div>
  );
}
export default App;
