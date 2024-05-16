
export default function ButtonC({ label, bcolor, handleClick }) {
  const colorB = {
    'blue': 'bg-blue-500',
    'orange': 'bg-orange-500',
    'yellow': 'bg-yellow-500'
  }

  const colorBHover = {
    'blue': 'hover:bg-blue-300',
    'orange': 'hover:bg-orange-300',
    'yellow': 'hover:bg-yellow-300'
  }

  return (
    <button className={`inline-flex px-10 py-3
    rounded-md
    justify-center items-center
    text-white font-bold
    ${colorB[bcolor]}
    ${colorBHover[bcolor]}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
