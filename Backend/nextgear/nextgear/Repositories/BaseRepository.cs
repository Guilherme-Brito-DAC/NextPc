using nextgear.Models;
using Microsoft.EntityFrameworkCore;

namespace nextgear.Repositories
{
    public abstract class BaseRepository
    {
        protected readonly ApplicationContext context;

        public BaseRepository(ApplicationContext context)
        {
            this.context = context;
        }
    }
}
