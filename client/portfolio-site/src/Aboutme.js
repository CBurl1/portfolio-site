import React from 'react';

const AboutMe = () => {
  return (
    <div>
      <h2 style={{ fontSize: '24px', textAlign: 'left' }}>About Me</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <h3>Who am I?</h3>
              <p>
                I am a full stack developer with a passion for code and design. My journey into web development began as a hobby, where I discovered the power of creating something from scratch. Since then, I have been working hard to learn and develop my skills in programming.
              </p>
            </td>
            <td>
              <h3>What are my goals?</h3>
              <p>
                My goal is to create engaging and intuitive websites that combine functionality and aesthetics. I am constantly seeking ways to improve my skills and knowledge, and I am always excited to try new things and exceed expectations.
              </p>
            </td>
            <td>
              <h3>What are my hobbies?</h3>
              <p>
                When I'm not coding, you can usually find me outdoors. I play many sports, help coach a high school baseball team, and love being with family. I thrive on adventure and enjoy the challenge of trying new things.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AboutMe;
