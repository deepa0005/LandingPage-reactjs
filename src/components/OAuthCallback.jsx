import { useEffect } from 'react';

const OAuthCallback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      console.log("✅ Zoho Auth Code:", code);
      alert("Authorization code copied to console.");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <h1 className="text-2xl font-bold">Zoho Redirect Successful</h1>
      <p>Check your browser console for the authorization code.</p>
    </div>
  );
};

export default OAuthCallback;
