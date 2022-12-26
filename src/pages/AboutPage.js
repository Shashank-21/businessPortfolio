import { useSelector } from "react-redux";
import { ReactComponent as ExpandedSvg } from "../svg/main-text.svg";
import { ReactComponent as ExpandedSvgDark } from "../svg/main-text-dark.svg";
import ValueDisplay from "../components/ValueDisplay";
import MyPic from "../images-constant/IMG_1119.png";
import Button from "../components/Button";

function AboutPage() {
  const theme = useSelector((state) => state.theme);
  const values = useSelector((state) => state.values);

  return (
    <div className={`${theme} p-10 page`}>
      <div className="flex flex-col justify-center items-center py-5">
        <h1 className="text-2xl mb-3 semi-bold">Stories by</h1>
        {theme === "light" ? (
          <ExpandedSvg className="h-9 w-64" />
        ) : (
          <ExpandedSvgDark className=" h-9 w-64" />
        )}
      </div>
      <div
        className={`bg-gradient-to-br ${
          theme === "light"
            ? "from-sky-300 via-cyan-200 to-teal-300"
            : "from-cyan-900 via-sky-700 to-blue-900"
        } mx-auto my-10 container px-10 py-5 rounded-lg`}
      >
        <h3
          className={`text-3xl semi-bold text-center mx-auto rounded-lg p-2 w-full`}
        >
          Why are we here?
        </h3>
        <p className="text-lg mt-2 flex flex-col justify-around leading-loose">
          Here are two sentences, conveying the same message:
          <span className="semi-bold py-1 text-center mx-auto my-3 text-2xl px-2 hover:scale-105 hover:duration-200 cursor-pointer">
            On a given day, about 1000 couples buy 3000 baby-care products from
            Baby Champ stores.
          </span>
          <span className="semi-bold py-1 text-center mx-auto my-3 text-2xl px-2 hover:scale-105 hover:duration-200 cursor-pointer">
            Thousands of parents trust Baby Champ to give the best care for
            their babies. Wanna know why?
          </span>
          <span className="my-3">
            Which of these would you rather click on?
          </span>
          The second line seems to draw our interest. Do you know why?
          <br />
          The first line highlights the facts. The second line highlights the
          emotion that's key for the business.
          <br /> The first line talks about the 'what' and the second line talks
          about the 'why'. <br /> <br />
          <span className="text-2xl m-auto bold">
            It's the 'why' that calls out to us much more than the 'what'.
          </span>
          <br />
          Numbers drive your business. They're what you base your decisions on.
          But a consumer always connects with your story. They connect with how
          you want to make an impact, and why it's important for you. You may be
          proud of the impact you're acheiving and may want to talk about the
          hard data. However, the 'why' of your business talks to the consumer
          much before these numbers, and they'd have made the decision about
          being a part of your journey by the time the numbers register in their
          mind.
          <br />
          <br />
          <span className="text-2xl text-center bold">
            And that's exactly where we come in!
          </span>
          <br />
          We create an irresistable story for your brand that helps you connect
          with your consumers, and ensure that having great numbers is one of
          the many by-products of our collective action!
        </p>
        <Button primary className="my-5 mx-auto">
          Tell me your story!
        </Button>
      </div>
      <div
        className={`bg-gradient-to-br ${
          theme === "light"
            ? "from-green-400 via-lime-300 to-emerald-400"
            : "from-green-900 via-lime-800 to-emerald-900"
        } px-10 py-5 my-10 container rounded-xl mx-auto flex flex-row justify-around flex-wrap`}
      >
        <h3 className="text-3xl bold text-center mx-auto rounded-lg p-2 w-full">
          Why choose us?
        </h3>
        {values.map((value) => {
          return (
            <ValueDisplay
              key={value.id}
              title={value.title}
              image={value.src}
              description={value.description}
            />
          );
        })}
      </div>
      <div
        className={`bg-gradient-to-br ${
          theme === "light"
            ? "from-amber-400 via-orange-300 to-red-400"
            : "from-amber-800 via-orange-700 to-red-800"
        } container mx-auto rounded-xl my-10 px-10 py-5`}
      >
        <h3 className="text-3xl bold text-center mx-auto rounded-lg mb-5 w-full">
          About me
        </h3>
        <div className="flex flex-row justify-around">
          <img
            className="mx-auto portrait rounded-lg mb-5"
            src={MyPic}
            alt="Me in mountains"
          />
          <p className="basis-2/3 ml-10 text-xl text-center my-auto">
            Hi! I'm Shashank, founder of
            <strong className="semi-bold ml-2">'Stories by Excelirate'</strong>.
            <br />
            <br />
            Being a child of curiosity, I'm naturally curious to learn and
            explore something new. And that's what drew me to the sector of
            ed-tech. But after a while, I realised that I wanted to do more.
            Around the time of this realisation, I was fired by the company I
            was working in then. It felt like a blessing and a call to action,
            and action I did take! <br /> <br />
            There are a bunch of things that I'm naturally interested in.
            Coding, writing, storytelling and helping people. Hence, I decided
            to establish my own business that brings out stories in other
            businesses. After all, the core purpose of any business is service!
            <br />
            There's a lot more to my story, as there is to yours. So, why don't
            you tell me your story?
            <Button primary className="my-10 text-lg mx-auto">
              View Services
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
