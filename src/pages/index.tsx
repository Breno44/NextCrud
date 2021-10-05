import Layout from "../components/layout";

export default function Home() {
  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        <div className="p-6">Conteudo</div>
      </Layout>
    </div>
  );
}
