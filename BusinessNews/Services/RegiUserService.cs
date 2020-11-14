using BusinessNews.Data;
using BusinessNews.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessNews.services
{
    public class RegiUserService : IRegiUserService
    {
        private readonly NewsDataContext _dataContext;

        public RegiUserService(NewsDataContext newsDataContext)
        {
            _dataContext = newsDataContext;

        }

        public RegiUserService()
        {
        }

        public List<RegiUserService> GetAll()
        {
            return _dataContext.RegiUser.ToList();

        }

        public RegisterdUser Get(int id)
        {
            
            return _dataContext.Users.FirstOrDefault(regiuser => regiuser.Id == id);
        }

        public void Add(RegiUserService newRegiUser)
        {
            _dataContext.RegiUser.Add(newRegiUser);
            _dataContext.SaveChanges();
        }

        public void Update(int id, RegiUserService regiuser)
        {
           
            _dataContext.RegiUsers.Update(regiuser);
            _dataContext.SaveChanges();
        }

        public void Delete(int id)
        {
            RegiUserService regiuser = Get(id);
            _dataContext.RegiUsers.Remove(regiuser);
            _dataContext.SaveChanges();
        }
    }
}
