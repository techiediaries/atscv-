import Link from 'next/link';
import ImgTilt from './ImgTilt';
import { FaGithub } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';

const page = () => {
    return (
        <div className="mx-auto flex h-full min-h-[calc(100vh-5rem)] max-w-screen-xl flex-col-reverse items-center justify-center gap-8 overflow-hidden px-3 py-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="">
                <h4 className="text-base md:text-xl">
                    <span className="text-gradient">Un Constructeur de CV Gratuit</span>
                </h4>
                <h1 className="text-3xl md:mt-2 md:text-4xl 2xl:text-[2.75rem] ">
                    <span className="text-gradient">La création de CV simplifiée.</span>
                </h1>
                <p className="mt-3 max-w-screen-sm text-sm text-gray-300 md:mt-10 md:text-lg">
                    Bienvenue sur Resumave ! Créer un excellent CV est facile ici. Notre outil vous aide à créer des CV compatibles avec les systèmes de suivi des candidatures (ATS).{' '}
                    <span className="hidden md:inline">
                      Il veille à ce que vous fassiez bonne impression auprès des employeurs. Dites adieu aux soucis de CV et bonjour à Atscv. Commencez dès maintenant et rapprochez-vous de votre emploi de rêve !
                    </span>
                </p> 
                <p className="mt-3 max-w-screen-sm text-sm text-gray-300 md:mt-10 md:text-lg">
                 Atscv est un créateur de CV compatible ATS conçu pour simplifier le processus de création de CV professionnels.
                    <span className="hidden md:inline">
                Atscv permet de créer des CV sans la contrainte de connexion ou d'inscription. Avec Atscv, les utilisateurs peuvent facilement saisir leurs informations, générer un CV bien formaté et l'exporter au format PDF A4.
                    </span>
                </p>

                <div className="mt-8 flex flex-col items-center justify-start gap-3 md:mt-16 md:flex-row md:gap-8">
                    <Link href={'/editor'} className="btn-filled w-full md:w-auto">
                        <span>Créer mon CV</span>
                        <IoIosRocket />
                    </Link>
                </div>
            </div>
            <div>
                <ImgTilt>
                    <img src="/sample.png" />
                </ImgTilt>
            </div>
        </div>
    );
};

export default page;
