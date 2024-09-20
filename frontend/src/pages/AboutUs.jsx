import AboutUsImage from "../images/AboutUs.jpg";

const AboutUs = () => {
  return (
    <div className="text-color1 ms-5 me-5 mr-5 mt-3">
      <h1 className="text-center">About Us</h1>
      <div className="row">
        <div className="col-6">
        <img src={AboutUsImage} className="d-block w-100" alt="..." />        
        </div>
        <div className="col-6">
         <b>E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. ShopKart houses everything you can possibly
        imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make
        your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You
        name it, and you can stay assured about finding them all here. For those of you with erratic working hours, ShopKart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down.
        What's more, with our year-round shopping festivals and events, our prices are irresistible. We're sure you'll find yourself picking up more than what you had in mind. If you are wondering why you should shop from ShopKart when there are multiple options
        available to you, well, the below will answer your question.</b>
        </div>
        
      </div>

      <div className="row">
        <b className="text-center">Contact Us at ShopKart@gmail.com</b>
      </div>


    </div>
  );
};

export default AboutUs;
