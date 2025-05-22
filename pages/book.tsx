import Layout from "../component/layout";

export default function BookTest() {
  return (
    <Layout>
      <div className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-6">Book a Lab Test</h1>
        <form className="max-w-xl space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-2 border rounded"
          />
          <select className="w-full p-2 border rounded">
            <option value="">Select Test</option>
            <option value="biochemistry">Biochemistry Panel</option>
            <option value="hematology">Hematology Profile</option>
            <option value="cytology">Histology/Cytology Evaluation</option>
          </select>
          <textarea
            placeholder="Additional Notes (optional)"
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit Request
          </button>
        </form>
      </div>
    </Layout>
  );
}

