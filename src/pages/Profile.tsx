import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, User, MapPin, CreditCard, Heart, ClipboardList, 
  Bell, Shield, HelpCircle, LogOut, ChevronRight, Camera,
  Settings, Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const menuSections = [
  {
    title: 'Minha Conta',
    items: [
      { icon: User, label: 'Dados pessoais', desc: 'Nome, e-mail, telefone' },
      { icon: MapPin, label: 'Meus endereços', desc: 'Gerencie seus endereços' },
      { icon: CreditCard, label: 'Formas de pagamento', desc: 'Cartões e métodos' },
    ],
  },
  {
    title: 'Atividade',
    items: [
      { icon: ClipboardList, label: 'Meus pedidos', desc: 'Histórico e acompanhamento' },
      { icon: Heart, label: 'Meus favoritos', desc: 'Produtos salvos' },
      { icon: Star, label: 'Avaliações', desc: 'Suas avaliações de produtos' },
    ],
  },
  {
    title: 'Configurações',
    items: [
      { icon: Bell, label: 'Notificações', desc: 'Gerencie seus alertas' },
      { icon: Settings, label: 'Preferências', desc: 'Idioma, tema e mais' },
      { icon: Shield, label: 'Privacidade e segurança', desc: 'Senha e dados' },
    ],
  },
  {
    title: 'Suporte',
    items: [
      { icon: HelpCircle, label: 'Ajuda e suporte', desc: 'FAQ e atendimento' },
    ],
  },
];

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary safe-area-inset-top">
        <div className="flex items-center gap-3 px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-primary-foreground">Minha Conta</h1>
        </div>
      </header>

      {/* Profile card */}
      <div className="px-4 -mt-0">
        <div className="bg-card rounded-2xl shadow-card p-5 flex items-center gap-4 mt-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center border-2 border-primary/20">
              <User className="w-8 h-8 text-muted-foreground" />
            </div>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-button">
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-foreground truncate">Usuário</h2>
            <p className="text-sm text-muted-foreground truncate">usuario@email.com</p>
            <div className="flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3 text-primary" />
              <span className="text-xs text-muted-foreground truncate">Planalto Paulista, SP</span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        </div>
      </div>

      {/* Menu sections */}
      <div className="px-4 mt-4 pb-8 space-y-4">
        {menuSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1 mb-2">
              {section.title}
            </h3>
            <div className="bg-card rounded-2xl shadow-soft overflow-hidden divide-y divide-border">
              {section.items.map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-muted/50 transition-colors text-left"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout */}
        <Button
          variant="outline"
          className="w-full border-destructive/30 text-destructive hover:bg-destructive/5 rounded-2xl h-12 gap-2"
        >
          <LogOut className="w-4 h-4" />
          Sair da conta
        </Button>
      </div>
    </div>
  );
};

export default Profile;
