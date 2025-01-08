const PlanCard = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          Explore our awesome{" "}
          <span className="underline decoration-blue-500">Services</span>
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          We provide services like assignments, reports, projects, tutoring,
          etc.
        </p>
      </div>

      <div className="container px-6 py-10 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <Card
          title="Assignment & Project Assistance"
          description="We guide students through their Course, helping them understand and complete their assignments with confidence."
        />
        <Card
          title="Step-by-Step Solutions"
          description="Our team breaks down tricky tasks into simple steps, making it easier to follow and learn."
        />
        <Card
          title="Video Explanations"
          description="We create clear and easy-to-understand video explanations to walk students through their assignments."
        />
      </div>
    </section>
  );
};

const Card = ({ title, description }) => {
  return (
    <div className="p-8 space-y-3 border-2 border-green-500 dark:border-green-500 rounded-xl">
      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
        {title}
      </h1>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default PlanCard;
