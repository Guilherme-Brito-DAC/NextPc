using nextgear.Models;
using nextgear.Repositories;
using System.Collections.Generic;

namespace nextgear.Formatters
{
    public class PcFormatter : IPcFormatter
    {
        public IPecasRepository IPecasRepository;
        public IUsuarioRepository IUsuarioRepository;

        public PcFormatter(IPecasRepository iPecasRepository, IUsuarioRepository iUsuarioRepository)
        {
            IPecasRepository = iPecasRepository;
            IUsuarioRepository = iUsuarioRepository;
        }

        public PcView PcToPcView(Pc Pc)
        {
            return new PcView(
                IPecasRepository.ListarUmArmazenamento(Pc.armazenamento_id),
                IPecasRepository.ListarUmaCpu(Pc.cpu_id),
                IPecasRepository.ListarUmaGpu(Pc.gpu_id),
                IPecasRepository.ListarUmaFonte(Pc.fonte_id),
                IPecasRepository.ListarUmaPlacaMae(Pc.placa_mae_id),
                IPecasRepository.ListarUmaRam(Pc.ram_id),
                IUsuarioRepository.ListarUmUsuario(Pc.usuario_id)
            );
        }

        public IList<PcView> ListPcToListPcView(IList<Pc> Pcs)
        {
            var resultado = new List<PcView>();

            foreach (var Pc in Pcs)
            {
                resultado.Add(new PcView(
                    IPecasRepository.ListarUmArmazenamento(Pc.armazenamento_id),
                    IPecasRepository.ListarUmaCpu(Pc.cpu_id),
                    IPecasRepository.ListarUmaGpu(Pc.gpu_id),
                    IPecasRepository.ListarUmaFonte(Pc.fonte_id),
                    IPecasRepository.ListarUmaPlacaMae(Pc.placa_mae_id),
                    IPecasRepository.ListarUmaRam(Pc.ram_id),
                    IUsuarioRepository.ListarUmUsuario(Pc.usuario_id)
                ));
            }
            return resultado;
        }
    }
}
