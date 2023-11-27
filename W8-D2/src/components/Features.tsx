import Feature from "./Feature";
function Features() {
  return (
    <>
      <div className="flex gap-2 max-sm:gap-10 flex-wrap items-center justify-center py-20 bg-slate-50">
        <Feature
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6765ae81-freshgoods-feature1_10go0b20go09e00000001o.jpg"
          title="Feature 1"
          text="Talk about some of the details of your offer with a focus on the value people get back."
        />
        <Feature
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/bf92a2f6-freshgoods-feature2_10go0ku0go09e00009e01o.jpg"
          title="Feature 2"
          text="Is there a pain point that your product or service resolves? Tell visitors about it here."
        />
        <Feature
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/f55dfcfa-freshgoods-feature3_10go0b40go09e00000601o.jpeg"
          title="Feature 3"
          text="Alternatively, you could use this section to address some frequently asked questions."
        />
      </div>
    </>
  );
}

export default Features;
