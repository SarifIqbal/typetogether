import Link from "next/link";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <div className="flex items-center justify-center text-black text-l font-semibold">
                click&nbsp;<Link href="/documents/test" target="_blank" className="underline text-blue-500">here</Link>&nbsp;to go to the document
            </div>
            <div className="flex items-center justify-center text-black text-l font-semibold">
                made with ❤️ by&nbsp;<a href="https://github.com/sarifiqbal" target="_blank">Sarif Iqbal</a>
            </div>
        </div>
    );
}

export default Home;