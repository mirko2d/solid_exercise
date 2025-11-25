# Ejercicios Principios SOLID en TypeScript

## Requisitos
- Node.js 18+
- npm

Instala dependencias:
```bash
npm install
```

## Scripts
```bash
npm run dev            # Ejecuta todos los principios (equivalente a ts-node src/app.ts)
npm run demo:srp       # Single Responsibility Principle
npm run demo:ocp       # Open/Closed Principle
npm run demo:lsp       # Liskov Substitution Principle
npm run demo:isp       # Interface Segregation Principle
npm run demo:dip       # Dependency Inversion Principle
```
También puedes pasar argumentos al entrypoint:
```bash
npx ts-node src/app.ts srp
npx ts-node src/app.ts ocp
npx ts-node src/app.ts all
```

## Estructura
```
src/
  app.ts
  01-single-responsibility-principle/
    index.ts
    clases/
      Report.ts
      ReportPrinter.ts
      ReportSaver.ts
    interfaces/
      IReport.ts
  02-open-closed-principle/
    index.ts
    clases/
      RegularDiscount.ts
      VipDiscount.ts
      StudentDiscount.ts
      DiscountContext.ts
    interfaces/
      IDiscount.ts
  03-liskov-substitution-principle/
    index.ts
    clases/
      Sparrow.ts
      Penguin.ts
    interfaces/
      IBird.ts
      IFlyingBird.ts
  04-interface-segregation-principle/
    index.ts
    clases/
      SimplePrinter.ts
      MultiFunctionPrinter.ts
    interfaces/
      IPrinter.ts
      IScanner.ts
      IFax.ts
  05-dependency-inversion-principle/
    index.ts
    clases/
      App.ts
      MySQLDatabase.ts
      PostgreSQLDatabase.ts
    interfaces/
      IDatabase.ts
```

## Justificación por principio
- SRP: Cada clase cumple una sola responsabilidad (modelo, impresión, guardado).
- OCP: Se agregan nuevos descuentos creando nuevas clases `IDiscount` sin modificar las existentes; ejemplo `SeniorDiscount` en `index.ts`.
- LSP: Separación `IBird` y `IFlyingBird` evita que un pingüino tenga método `fly` inválido; funciones consumen interfaces adecuadas.
- ISP: Interfaces granulares (`IPrinter`, `IScanner`, `IFax`) permiten a `SimplePrinter` implementar solo lo que necesita.
- DIP: `App` depende de la abstracción `IDatabase`; se inyectan implementaciones concretas (`MySQLDatabase`, `PostgreSQLDatabase`).

## Extensión
Para agregar un nuevo descuento:
```ts
class BlackFridayDiscount implements IDiscount {
  description = "Black Friday 50%";
  apply(amount: number) { return amount * 0.5; }
}
// context.setStrategy(new BlackFridayDiscount());
```

## Compilación
```bash
npm run build
```
Salida en `dist/`.

## Nota
El código evita `any`, mantiene tipado estricto y separa claramente responsabilidades.
# solid_exercise
