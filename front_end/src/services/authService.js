import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import useHttpClient from '../hooks/useHttpClient';
import { toast } from 'react-toastify';
import jwt_decode from 'jwt-decode';
const useAuthService = () => {
  const { sendRequest } = useHttpClient();
  const { signIn, clearSessionStorage, user, setUser } = useContext(
    AuthContext
  );
  const navigate = useNavigate();

  const login = async (data, machine) => {
    try {
      const response = await sendRequest('loginOperateur', 'post', {
        user: {
          matricule: data.matricule,
          machine: {
            processType: machine.processType,
            machineId: machine.id,
            isUsed: machine.isUsed,
            code: machine.code,
            id_model: machine.id_model,
          },
        },
      });
      if (response.data.data.accessToken) {
        console.log('token', response.data);
        sessionStorage.setItem('machine', JSON.stringify(machine));
        sessionStorage.setItem('listOf', JSON.stringify([]));
        setMatricule(data.matricule);
        setMachineId(machine.machineId);
        signIn(response.data.data.accessToken);
        getUserData();
        toast.success('Bienvenue');
        navigate('/');
      }
    } catch (err) {
      toast.error('Vérifier vos données');
    }
  };

  const logout = () => {
    clearSessionStorage();
    window.close();
    window.open('/login');
  };

  return { login, logout };
};

export default useAuthService;
