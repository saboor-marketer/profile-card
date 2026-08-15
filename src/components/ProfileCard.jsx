import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './ProfileCard.css';

const ProfileCard = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/abdulsabooryounas';
  const githubUrl = 'https://github.com/saboor-marketer';
  const profileImage = '/profile.png'; // Replace with your actual image path

  return (
    <article className="profile-card">
      <div className="profile-card__content">
        <div className="profile-card__avatar">
          <img 
            src={profileImage} 
            alt="Abdul Saboor" 
            className="profile-card__avatar-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className="profile-card__avatar-placeholder">AS</div>
        </div>
        
        <h1 className="profile-card__name">Abdul Saboor</h1>
        <p className="profile-card__title">Frontend Developer</p>
        
        <div className="profile-card__social-links">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-card__social-link"
            aria-label="Visit LinkedIn profile"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-card__social-link"
            aria-label="Visit GitHub profile"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProfileCard;
