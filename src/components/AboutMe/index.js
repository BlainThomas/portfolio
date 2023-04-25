import logo from '../../img/memoji.png';

const AboutMe = () => {
  return (
    <section id='about-me' className='py-10 h-full bg-blue-400'>
      <h1 className='drop-shadow-lg roboto text-4xl text-center text-white roboto pt-5'>
        About Me
      </h1>
      <div className='container mx-auto px-2 h-full my-10'>
        <div className='flex flex-wrap justify-center items-center'>
          <div className='w-full md:w-6/12 px-4 max-w-xs mb-4'>
            <img
              src={logo}
              alt='profile'
              className='rounded-full bg-white border border-slate-400 shadow-md'
            />
          </div>

          <div className='w-full md:w-6/12 p-5 bg-white rounded-lg border border-slate-400 shadow'>
            <p className='text-slate-600 text-lg font-semibold mb-3'>
              My name is Blain, and I am a proficient entrepreneur and 
              full stack developer. I possess a keen ability to identify 
              hidden value in various areas and utilize my skills to 
              facilitate growth. In my leisure time, I relish spending 
              quality moments with my family and friends, as their 
              company serves to both relax and inspire me in my 
              professional pursuits.
            </p>
            <p className='text-slate-600 text-lg font-semibold'>
            My journey into coding initially began as a hobby, where I 
            dabbled in mining Bitcoin. However, I quickly realized my 
            true passion for coding and made the decision to pursue a 
            career change. Despite the magnitude of this decision, I 
            have been fortunate to work on projects that I am genuinely 
            passionate about. I am eagerly looking forward to encountering 
            new challenges and finding innovative solutions in my future 
            endeavors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
