import React  from "react";
import QuestionCard from "../../components/QuestionCard/QuestionCard";

const FrequentlyAskedQuestions = () => {
  //Soru ve cevaplari sonradan buraya ekleyebiliriz. Buradan alip map ediyoruz.
  const questions  = [
    {
        question: 'Ödemeleri nasıl işliyorsunuz?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu lectus. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu lectus.'
    },
    {
        question: '100 yanıt sınırına neler dahildir?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu lectus. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu lectus.'
    },
    {
        question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu lectus. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eu aliquam nunc nisl eu lectus.'
    },
]
return (
    <main className=" bg-gray-100 px-4 font-sans w-full h-screen border first-letter:flex flex-col text-[#4B465C]">
      <div className="my-16 text-center">
        <h2 className="font-semibold text-[32px]">Sık Sorulan Sorular</h2>
        <h3 className="text-[15px]">Haydi en çok sorulan soruları cevaplamaya yardımcı olalım</h3>
      </div>
      {questions.map((question) => (
        <QuestionCard question={question.question} answer={question.answer} />
      ))}
    </main>
  );
};

export default FrequentlyAskedQuestions;
