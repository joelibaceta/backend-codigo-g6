class CentroNotificaciones:
  def notificar(self, mensaje):
    print("notificado")

class RedSocial():
  def __init__(self, nombre, usuarios):
    self.nombre = nombre
    self.usuarios = usuarios
    self.notificator = CentroNotificaciones()
  
  def postear(self):
    # cosas de posteo
    self.notificator = None


