using BusinessNews.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelSystem.services
{
    public interface IRegiUserService
    {
        List<RegiUser> GetAll();
        RegiUser Get(int id);
        void Add(RegiUser newUser);
        void Update(int id, RegiUser user);
        void Delete(int id);
    }
}
