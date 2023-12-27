import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'akashk.cf',
    href: 'https://akashk.cf',
  },
  {
    social: 'email',
    link: 'akash123smr@gmail.com',
    href: 'mailto:akash123smr@gmail.com',
  },
  {
    social: 'github',
    link: 'Abuster147',
    href: 'https://github.com/Abuster147',
  },
  {
    social: 'linkedin',
    link: 'Akash Kumar',
    href: 'https://www.linkedin.com/in/akash-kumar-939312226/',
  },
  {
    social: 'twitter',
    link: 'akashkumar',
    href: 'https://www.twitter.com',
  },
  {
    social: 'instagram',
    link: 'akashkk',
    href: 'https://www.instagram.com/akashkk_?igsh=MTJ2NncwMHRlbHdwMQ%3D%3D&utm_source=qr',
  },
  

 
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
