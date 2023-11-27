
import Button from "./Button";
import bg_line from "../assets/bg-line.png";
function ToOrder() {
  return (
    <>
      <section style={{ backgroundImage: `url(${bg_line})` }} className="w-screen flex  flex-col items-center  p-16 gap-8 max-sm:p-6 ">
        <div className="flex flex-col items-center  text-center gap-5 max-sm:px-16">
            <p className="text-5xl w-[23.5rem] ">End with one final call to action</p>
            <p className="text-base w-[33rem] max-sm:w-[25rem]">
            This is your last shot at converting someone.
Remind them about the benefits of your offer and encourage them to act now.
            </p>
            <Button text="ORDER NOW" />
        </div>
      </section>
    </>
  );
}

export default ToOrder;
