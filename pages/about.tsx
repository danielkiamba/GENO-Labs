import Layout from "../component/layout";

export default function About() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-6">About GENO Labs</h1>
        <p className="text-lg mb-4">
          GENO Labs is a state-of-the-art diagnostic center specializing in
          Biochemistry, Hematology, and Histology 
          & Cytology. Our mission is to provide accurate,
          timely, and affordable diagnostic services to clinicians and patients across the region.
        </p>
        <p className="text-lg">
          Our facility is equipped with advanced instrumentation, and our team of professionals
          is dedicated to excellence in laboratory medicine, ensuring the best possible outcomes
          for patients.
        </p>
      </div>
    </Layout>
  );
}

