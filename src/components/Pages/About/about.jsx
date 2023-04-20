import Navbar from "../../Navbar/navbar";
import NewFooter from "../../New Footer/newFooter";

function About() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="h-[80%] flex flex-col justify-center items-center">
        <div className="misson w-full px-12 py-10 mb-8 bg-slate-500 h-1/2 flex flex-col justify-center items-center">
          <div className="mb-4 text-2xl font-bold">
            <p>Our Mission</p>
          </div>
          <div className="font-semibold">
            <p>
              Donato's mission is to provide a convenient and secure platform
              for people to donate their gently used clothes, toys, and books to
              those in need. By facilitating the donation process, Donato aims
              to encourage a culture of giving and promote sustainable
              consumption practices. The website aims to connect donors with
              local charitable organizations and NGOs that can distribute the
              donations to individuals and communities in need. Additionally,
              Donato seeks to raise awareness about the importance of charitable
              giving and inspire people to take action in their communities.
              Overall, Donato's mission is to create a positive impact on
              society by promoting social responsibility and kindness.
            </p>
          </div>
        </div>
        <div className="vision w-full px-12 py-10 h-1/2 mb-8 bg-slate-500 flex flex-col justify-center items-center">
          <div className="mb-4 text-2xl font-bold">
            <p>Our Vision</p>
          </div>
          <div className="font-semibold">
            The vision of Donato is to create a world where every individual has
            access to basic necessities such as clothing, toys, and books.
            Donato envisions a society where everyone has equal opportunities to
            learn and grow, regardless of their socio-economic background. The
            website aims to inspire people to donate their gently used items to
            those in need, thereby reducing waste and promoting sustainable
            consumption practices. Donato's vision is to build a community of
            donors who are committed to making a positive impact on the world
            and creating a better future for generations to come. By
            facilitating the donation process and connecting donors with
            charitable organizations, Donato aims to make it easy and convenient
            for people to give back and make a difference in their communities.
            Ultimately, Donato's vision is to promote social responsibility and
            kindness, and create a more equitable and sustainable world.
          </div>
        </div>
      </div>
      <NewFooter />
    </div>
  );
}

export default About;
