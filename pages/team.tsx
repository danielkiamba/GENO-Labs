import Layout from "@/component/layout";

export default function Team() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-6">Meet Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-4 shadow">
            <h2 className="text-xl font-semibold">Dr. Amina Otieno</h2>
            <p className="text-sm text-gray-600">Chief Pathologist</p>
          </div>
          <div className="border rounded-xl p-4 shadow">
            <h2 className="text-xl font-semibold">Dr. David Kimani</h2>
            <p className="text-sm text-gray-600">Hematology Specialist</p>
          </div>
          <div className="border rounded-xl p-4 shadow">
            <h2 className="text-xl font-semibold">Dr. Grace Mburu</h2>
            <p className="text-sm text-gray-600">Cytopathologist</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

