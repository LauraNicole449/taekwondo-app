// import SimplePlayer from '../common/Video';
import { tuls, Tul } from '../consts/tuls';

export const Tules = () => {
  return (
    <section className="flex flex-col gap-2 pt-4">
      <h1 className="text-xl">Selecciona tu tul</h1>
      <article className="grid grid-cols-2">
        {tuls.map((tul) => (
          <TulCard key={tul.id} tul={tul} />
        ))}
      </article>
      {/* <SimplePlayer />; */}
    </section>
  );
};

const TulCard = ({ tul }: { tul: Tul }) => {
  return (
    <div className="bg-white">
      <img src="/imgs/Rectangle.png" alt="Tul" />
      <h2>{tul.name}</h2>
      <p>{tul.moves}</p>
    </div>
  );
};
