public class Soya extends BeverageDecorator {
	Beverage beverage;

	public Soya(Beverage beverage) {
		this.beverage = beverage;
	}

	public String getCost() {
		return this.beverage.getCost() + 0.25;
	}

	public String getDescription() {

	}
}