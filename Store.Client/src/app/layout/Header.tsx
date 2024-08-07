import { FiShoppingCart } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
  ];
  const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
  ];
  return (
    <section className='bg-gray-700 text-white h-12  flex items-center gap-4 justify-between'>
      <NavLink to='/' className='ml-4 font-poppins text-lg'>
        React-Store
      </NavLink>
      {/* middle items */}
      <section className='flex gap-4 md:gap-8'>
        {midLinks.map((midLink) => {
          const { title, path } = midLink;
          return <NavLink to={path}>{title.toUpperCase()}</NavLink>;
        })}
        {/* cart */}
        <section className='flex justify-center items-center text-lg  relative gap-1'>
          <FiShoppingCart />
          <span className='text-purple-400 font-roboto'>4</span>
        </section>
      </section>
      {/* right side */}
      <section className='flex gap-4 mr-4 md:gap-8'>
        {rightLinks.map((rightLink) => {
          const { title, path } = rightLink;
          return <NavLink to={path}>{title.toUpperCase()}</NavLink>;
        })}
      </section>
    </section>
  );
}
