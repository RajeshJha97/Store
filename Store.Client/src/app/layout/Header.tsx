import { FiShoppingCart } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const midLinks = [
    { id: 1, title: 'catalog', path: '/catalog' },
    { id: 2, title: 'about', path: '/about' },
    { id: 3, title: 'contact', path: '/contact' },
  ];
  const rightLinks = [
    { id: 4, title: 'login', path: '/login' },
    { id: 5, title: 'register', path: '/register' },
  ];
  return (
    <section className='bg-gray-700 text-white h-12  flex items-center gap-4 justify-between'>
      <NavLink to='/' className='ml-4 font-poppins text-lg'>
        React-Store
      </NavLink>
      {/* middle items */}
      <section className='flex gap-4 md:gap-8'>
        {midLinks.map((midLink) => {
          const { id, title, path } = midLink;
          return (
            <NavLink
              to={path}
              key={id}
              className='hover:text-purple-500 duration-200'
            >
              {title.toUpperCase()}
            </NavLink>
          );
        })}
        {/* cart */}
      </section>
      {/* right side */}
      <section className='flex gap-4 mr-4 md:gap-8'>
        <section className='flex justify-center items-center text-lg  relative gap-1'>
          <FiShoppingCart />
          <span className='text-purple-400 font-roboto'>4</span>
        </section>
        {rightLinks.map((rightLink) => {
          const { id, title, path } = rightLink;
          return (
            <NavLink
              to={path}
              key={id}
              className='hover:text-purple-500 duration-200'
            >
              {title.toUpperCase()}
            </NavLink>
          );
        })}
      </section>
    </section>
  );
}
